#!/usr/bin/env python3
"""
Generate 4 SVG diagrams for 量子计算与量子芯片.md
Run: python gen_quantum_svgs.py
Outputs: svg2_interference.svg  svg3_lc_jj.svg  svg4_temperature.svg  svg5_architecture.svg
"""

import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import matplotlib.patches as patches
import numpy as np
import os

OUT = os.path.dirname(os.path.abspath(__file__))

C = dict(
    bg='#F8FAFC', border='#CBD5E1', dark='#334155', mid='#64748B',
    blue='#3B82F6', blue_bg='#DBEAFE',
    purple='#7C3AED', purple_bg='#EDE9FE',
    green='#16A34A', green_bg='#DCFCE7',
    orange='#D97706', orange_bg='#FEF3C7',
    red='#DC2626', red_bg='#FEE2E2',
)

plt.rcParams.update({
    'font.family': ['Arial Unicode MS', 'Heiti TC', 'DejaVu Sans'],
    'axes.spines.top': False,
    'axes.spines.right': False,
})

SAVE_KW = dict(format='svg', bbox_inches='tight', facecolor=C['bg'])


# ── SVG2: Quantum Interference ───────────────────────────────────────────────

def draw_svg2():
    fig, axes = plt.subplots(1, 3, figsize=(10.5, 3.6))
    fig.patch.set_facecolor(C['bg'])
    fig.subplots_adjust(wspace=0.35, left=0.07, right=0.97, top=0.85, bottom=0.18)

    N = 8
    x = np.arange(N)
    correct = 3

    panels = [
        # (amplitudes, bar_colors, edge_colors, title, caption)
        (
            np.ones(N) / np.sqrt(N),
            [C['purple_bg']] * N,
            [C['purple']] * N,
            '① 初始叠加态',
            '所有答案等概率',
        ),
        (
            np.array([-0.18, 0.12, -0.22, 0.62, -0.28, 0.10, -0.14, 0.18]),
            None, None,
            '② 量子门演化',
            '错误答案概率幅相消，正确答案增强',
        ),
        (
            np.array([0, 0, 0, 0.97, 0, 0, 0, 0]),
            [C['blue_bg'] if i != correct else C['purple_bg'] for i in range(N)],
            [C['blue'] if i != correct else C['purple'] for i in range(N)],
            '③ 测量',
            '几乎总能得到正确答案',
        ),
    ]

    for idx, (amps, bcolors, ecolors, title, caption) in enumerate(panels):
        ax = axes[idx]
        ax.set_facecolor(C['bg'])

        if bcolors is None:
            bcolors = [C['red_bg'] if a < 0 else C['green_bg'] for a in amps]
            ecolors = [C['red'] if a < 0 else C['green'] for a in amps]

        ax.bar(x, amps, color=bcolors, edgecolor=ecolors, linewidth=1.2, width=0.7)
        ax.axhline(0, color=C['dark'], linewidth=0.7)
        ax.set_ylim(-0.52, 0.88)
        ax.set_xticks([])
        ax.set_title(title, fontsize=11, color=C['dark'], fontweight='bold', pad=6)
        ax.spines['bottom'].set_color(C['border'])
        ax.spines['left'].set_color(C['border'])
        ax.set_ylabel('概率幅' if idx == 0 else '', fontsize=8.5, color=C['mid'])
        ax.text(N / 2 - 0.5, -0.49, caption, ha='center', fontsize=8, color=C['mid'])

        # annotation on panel 2
        if idx == 1:
            ax.annotate(
                '正确答案', xy=(correct, amps[correct] + 0.03),
                xytext=(correct + 1.8, 0.80), fontsize=8, color=C['green'],
                arrowprops=dict(arrowstyle='->', color=C['green'], lw=1.2),
            )
        # tick mark on panel 3
        if idx == 2:
            ax.text(correct, amps[correct] + 0.03, '✓', ha='center',
                    fontsize=14, color=C['purple'])

    # arrows between panels
    for fx in [0.355, 0.665]:
        fig.text(fx, 0.50, '→', fontsize=22, color=C['mid'], ha='center', va='center')

    plt.savefig(os.path.join(OUT, 'svg2_interference.svg'), **SAVE_KW)
    plt.close()
    print('svg2_interference.svg  ✓')


# ── SVG3: LC → Josephson Junction → Qubit ───────────────────────────────────

def draw_svg3():
    fig, ax = plt.subplots(figsize=(11, 4.2))
    fig.patch.set_facecolor(C['bg'])
    ax.set_facecolor(C['bg'])
    ax.set_xlim(0, 11)
    ax.set_ylim(0, 4.2)
    ax.axis('off')

    # ── helpers ──────────────────────────────────────────────────────────────

    def energy_ladder(cx, bottom, spacings, color=C['dark'], lw=1.8):
        """Return list of y-positions after drawing energy levels."""
        ys = [bottom]
        for sp in spacings:
            ys.append(ys[-1] + sp)
        for y in ys:
            ax.plot([cx - 0.45, cx + 0.45], [y, y], color=color, lw=lw)
        return ys

    def double_arrow(x, y0, y1, color, offset=0.6):
        ax.annotate('', xy=(x + offset, y1), xytext=(x + offset, y0),
                    arrowprops=dict(arrowstyle='<->', color=color, lw=1.5))

    def caption(cx, y, text, color=C['mid']):
        ax.text(cx, y, text, ha='center', fontsize=8.5, color=color)

    def panel_title(cx, y, text):
        ax.text(cx, y, text, ha='center', fontsize=11.5,
                fontweight='bold', color=C['dark'])

    # ── Panel 1: Normal LC ───────────────────────────────────────────────────
    x1 = 1.6
    panel_title(x1, 4.05, '① 普通 LC 谐振器')

    # simplified coil symbol
    for i in range(4):
        th = np.linspace(0, np.pi, 30)
        ax.plot(x1 - 0.45 + i * 0.22 + 0.11 * np.cos(th),
                3.25 + 0.10 * np.sin(th),
                color=C['blue'], lw=1.8)
    # capacitor plates
    for dy in [-0.10, 0.10]:
        ax.plot([x1 + 0.28, x1 + 0.62], [3.25 + dy, 3.25 + dy], color=C['blue'], lw=2.5)
    # wire top / bottom
    ax.plot([x1 - 0.45, x1 + 0.62], [3.5, 3.5], color=C['blue'], lw=1.5)
    ax.plot([x1 - 0.45, x1 + 0.62], [3.0, 3.0], color=C['blue'], lw=1.5)
    ax.plot([x1 - 0.45, x1 - 0.45], [3.0, 3.5], color=C['blue'], lw=1.5)
    ax.plot([x1 + 0.62, x1 + 0.62], [3.0, 3.5], color=C['blue'], lw=1.5)

    sp1 = [0.34, 0.34, 0.34, 0.34]
    ys1 = energy_ladder(x1, 0.4, sp1, color=C['blue'])
    double_arrow(x1, ys1[0], ys1[1], C['blue'])
    double_arrow(x1, ys1[1], ys1[2], C['blue'])
    ax.text(x1 + 0.75, (ys1[0] + ys1[1]) / 2, 'Δ', fontsize=10, color=C['blue'], va='center')
    ax.text(x1 + 0.75, (ys1[1] + ys1[2]) / 2, 'Δ', fontsize=10, color=C['blue'], va='center')
    caption(x1, 0.12, '能级均匀 → 无法单独寻址')

    # ── Arrow 1 → 2 ──────────────────────────────────────────────────────────
    ax.annotate('', xy=(3.7, 2.2), xytext=(2.65, 2.2),
                arrowprops=dict(arrowstyle='->', color=C['mid'], lw=1.8))
    ax.text(3.18, 2.52, '换入约瑟夫森结', ha='center', fontsize=8.5, color=C['mid'])

    # ── Panel 2: JJ LC ───────────────────────────────────────────────────────
    x2 = 5.2
    panel_title(x2, 4.05, '② 接入约瑟夫森结')

    # coil (same)
    for i in range(4):
        th = np.linspace(0, np.pi, 30)
        ax.plot(x2 - 0.45 + i * 0.22 + 0.11 * np.cos(th),
                3.25 + 0.10 * np.sin(th),
                color=C['purple'], lw=1.8)
    # capacitor
    for dy in [-0.10, 0.10]:
        ax.plot([x2 + 0.28, x2 + 0.62], [3.25 + dy, 3.25 + dy], color=C['purple'], lw=2.5)
    # JJ box on inductor branch
    ax.add_patch(patches.FancyBboxPatch(
        (x2 - 0.60, 3.06), 0.30, 0.38,
        boxstyle='round,pad=0.02', facecolor=C['purple_bg'], edgecolor=C['purple'], lw=2))
    ax.text(x2 - 0.45, 3.25, 'JJ', ha='center', va='center',
            fontsize=8.5, color=C['purple'], fontweight='bold')
    # wires
    ax.plot([x2 - 0.30, x2 + 0.62], [3.5, 3.5], color=C['purple'], lw=1.5)
    ax.plot([x2 - 0.30, x2 + 0.62], [3.0, 3.0], color=C['purple'], lw=1.5)
    ax.plot([x2 - 0.60, x2 - 0.60], [3.0, 3.5], color=C['purple'], lw=1.5)
    ax.plot([x2 + 0.62, x2 + 0.62], [3.0, 3.5], color=C['purple'], lw=1.5)

    sp2 = [0.26, 0.34, 0.38, 0.42]
    ys2 = energy_ladder(x2, 0.4, sp2, color=C['dark'])
    double_arrow(x2, ys2[0], ys2[1], C['purple'])
    double_arrow(x2, ys2[1], ys2[2], C['mid'])
    ax.text(x2 + 0.75, (ys2[0] + ys2[1]) / 2, 'Δ₀₁', fontsize=9,
            color=C['purple'], va='center', fontweight='bold')
    ax.text(x2 + 0.75, (ys2[1] + ys2[2]) / 2, 'Δ₁₂', fontsize=9, color=C['mid'], va='center')
    ax.text(x2 + 1.2, 0.95, '≠', fontsize=16, color=C['purple'], va='center')
    caption(x2, 0.12, '非线性 → 间距不再均匀')

    # ── Arrow 2 → 3 ──────────────────────────────────────────────────────────
    ax.annotate('', xy=(7.3, 2.2), xytext=(6.35, 2.2),
                arrowprops=dict(arrowstyle='->', color=C['mid'], lw=1.8))
    ax.text(6.82, 2.52, '特定频率微波脉冲', ha='center', fontsize=8.5, color=C['mid'])

    # ── Panel 3: Qubit ───────────────────────────────────────────────────────
    x3 = 9.0
    panel_title(x3, 4.05, '③ 量子比特')

    sp3 = [0.26, 0.34, 0.38, 0.42]
    ys3 = energy_ladder(x3, 0.4, sp3, color=C['border'])
    # highlight bottom two
    ax.plot([x3 - 0.55, x3 + 0.55], [ys3[0], ys3[0]], color=C['purple'], lw=3, zorder=5)
    ax.plot([x3 - 0.55, x3 + 0.55], [ys3[1], ys3[1]], color=C['purple'], lw=3, zorder=5)
    ax.text(x3 - 0.75, ys3[0], '|0⟩', fontsize=11, color=C['purple'],
            va='center', fontweight='bold')
    ax.text(x3 - 0.75, ys3[1], '|1⟩', fontsize=11, color=C['purple'],
            va='center', fontweight='bold')
    # microwave arrow
    ax.annotate('', xy=(x3, ys3[1] - 0.04), xytext=(x3, ys3[0] + 0.04),
                arrowprops=dict(arrowstyle='->', color=C['orange'], lw=2.2))
    ax.text(x3 + 0.6, (ys3[0] + ys3[1]) / 2, 'ω₀₁\n微波', fontsize=8.5,
            color=C['orange'], va='center')
    caption(x3, 0.12, '基态|0⟩与激发态|1⟩编码量子信息')

    plt.tight_layout()
    plt.savefig(os.path.join(OUT, 'svg3_lc_jj.svg'), **SAVE_KW)
    plt.close()
    print('svg3_lc_jj.svg  ✓')


# ── SVG4: Temperature Ladder + kT vs Signal ──────────────────────────────────

def draw_svg4():
    fig, (axL, axR) = plt.subplots(1, 2, figsize=(11, 4.5),
                                    gridspec_kw={'width_ratios': [0.9, 1.1]})
    fig.patch.set_facecolor(C['bg'])
    fig.subplots_adjust(wspace=0.32, left=0.06, right=0.97, top=0.88, bottom=0.14)

    # ── Left: temperature ladder (log scale) ─────────────────────────────────
    axL.set_facecolor(C['bg'])
    axL.set_yscale('log')
    axL.set_xlim(-1, 3)
    axL.set_ylim(0.012, 600)
    axL.set_xticks([])
    axL.set_ylabel('温度 (K)', fontsize=9, color=C['mid'])
    axL.set_title('稀释制冷机温度层级', fontsize=11, fontweight='bold', color=C['dark'], pad=8)
    axL.spines['bottom'].set_visible(False)
    axL.spines['left'].set_color(C['border'])

    levels = [
        (300,   '300 K',   '室温', '#EF4444'),
        (77,    '77 K',    '液氮预冷', '#F97316'),
        (4,     '4 K',     '液氦 / 4K CMOS', '#EAB308'),
        (0.1,   '100 mK',  '预冷级', '#22C55E'),
        (0.02,  '20 mK',   '量子芯片', '#3B82F6'),
    ]

    bar_x = 0.5
    for T, label_T, label_desc, color in levels:
        axL.plot(bar_x, T, 'o', color=color, markersize=11, zorder=5)
        axL.plot([bar_x, bar_x + 0.25], [T, T], color=color, lw=1.5)
        axL.text(bar_x + 0.35, T, f'{label_T}  {label_desc}',
                 va='center', fontsize=9, color=C['dark'],
                 fontweight='bold' if T == 0.02 else 'normal')

    # vertical bar
    axL.plot([bar_x, bar_x], [0.015, 400], color=C['border'], lw=2, zorder=1)

    # ── Right: kT noise vs qubit level spacing ────────────────────────────────
    axR.set_facecolor(C['bg'])
    axR.set_yscale('log')
    axR.spines['left'].set_color(C['border'])
    axR.spines['bottom'].set_color(C['border'])

    cats = ['室温\n(300 K)', '4 K', '20 mK', '量子比特\n能级间距']
    vals = [300, 4, 0.02, 0.2]
    colors_bar = ['#EF4444', '#EAB308', '#3B82F6', '#7C3AED']
    hatches = ['', '', '', '//']

    bars = axR.bar(range(4), vals, color=[c + '55' for c in colors_bar],
                   edgecolor=colors_bar, linewidth=2, width=0.55, hatch=['', '', '', '//'])
    axR.set_xticks(range(4))
    axR.set_xticklabels(cats, fontsize=9)
    axR.set_ylabel('等效温度 (K)', fontsize=9, color=C['mid'])
    axR.set_title('kT 热噪声 vs 量子比特信号', fontsize=11,
                  fontweight='bold', color=C['dark'], pad=8)

    # ratio annotation: 300K vs 0.2K
    axR.annotate('', xy=(-0.22, 0.2), xytext=(-0.22, 300),
                 arrowprops=dict(arrowstyle='<->', color=C['red'], lw=1.5))
    axR.text(-0.55, np.sqrt(300 * 0.2), '差\n1500×', ha='center', fontsize=8.5,
             color=C['red'], va='center')

    # safe zone box
    axR.add_patch(mpatches.FancyBboxPatch(
        (1.72, 0.013), 1.56, 0.38,
        boxstyle='round,pad=0.01', facecolor='none',
        edgecolor=C['blue'], lw=1.8, linestyle='--'))
    axR.text(2.5, 0.017, '≈ 同量级\n量子态稳定', ha='center', fontsize=8,
             color=C['blue'], va='bottom')

    axR.set_ylim(0.012, 600)
    axR.set_xlim(-0.7, 3.7)

    plt.savefig(os.path.join(OUT, 'svg4_temperature.svg'), **SAVE_KW)
    plt.close()
    print('svg4_temperature.svg  ✓')


# ── SVG5: QEC Scale + Control Architecture ───────────────────────────────────

def draw_svg5():
    fig, (axL, axR) = plt.subplots(1, 2, figsize=(12, 5))
    fig.patch.set_facecolor(C['bg'])
    fig.subplots_adjust(wspace=0.10, left=0.02, right=0.98, top=0.88, bottom=0.06)

    # ── Left: physical → logical qubit grid ──────────────────────────────────
    axL.set_facecolor(C['bg'])
    axL.set_xlim(0, 8)
    axL.set_ylim(0, 8)
    axL.axis('off')
    axL.set_title('量子纠错：物理比特 → 逻辑比特', fontsize=11,
                  fontweight='bold', color=C['dark'], pad=8)

    n = 7
    cx_c, cy_c = n // 2, n // 2
    sp = 1.0
    ox, oy = 0.5, 0.55

    for row in range(n):
        for col in range(n):
            x = ox + col * sp
            y = oy + row * sp
            is_center = (row == cy_c and col == cx_c)
            fc = C['purple_bg'] if is_center else C['blue_bg']
            ec = C['purple'] if is_center else C['blue']
            lw = 2.5 if is_center else 1.5
            circle = plt.Circle((x, y), 0.36, facecolor=fc, edgecolor=ec, lw=lw, zorder=3)
            axL.add_patch(circle)
            label = 'L' if is_center else 'P'
            fs = 9 if is_center else 7.5
            axL.text(x, y, label, ha='center', va='center',
                     fontsize=fs, color=ec, fontweight='bold', zorder=4)

    axL.text(4.0, 0.12, '49 物理比特（P）保护 1 个逻辑比特（L）',
             ha='center', fontsize=9, color=C['mid'])
    axL.text(4.0, -0.30, '实用容错量子计算机 → 数百万物理比特',
             ha='center', fontsize=8.5, color=C['mid'], style='italic')

    # legend
    for lbl, fc, ec, xi in [('P  物理比特', C['blue_bg'], C['blue'], 1.1),
                              ('L  逻辑比特', C['purple_bg'], C['purple'], 4.5)]:
        axL.add_patch(plt.Circle((xi - 0.3, 7.55), 0.22, facecolor=fc, edgecolor=ec, lw=1.5, zorder=3))
        axL.text(xi + 0.05, 7.55, lbl, va='center', fontsize=8.5, color=C['dark'])

    # ── Right: temperature layer architecture ─────────────────────────────────
    axR.set_facecolor(C['bg'])
    axR.set_xlim(0, 8)
    axR.set_ylim(0, 8)
    axR.axis('off')
    axR.set_title('控制架构：从 20 mK 到室温', fontsize=11,
                  fontweight='bold', color=C['dark'], pad=8)

    layers = [
        # (y_center, height, temp_label, desc, edge_color, face_color)
        (6.8, 1.5, '室温 300 K', '经典控制系统  AWG · ADC · FPGA', '#EF4444', '#FEE2E2'),
        (4.4, 1.5, '4 K 低温区', '低温 CMOS 控制芯片  ← 微电子切入点', '#D97706', '#FEF3C7'),
        (2.0, 1.5, '20 mK', '量子芯片  超导量子比特阵列', '#3B82F6', '#DBEAFE'),
    ]

    for yc, h, tlbl, desc, ec, fc in layers:
        axR.add_patch(mpatches.FancyBboxPatch(
            (0.4, yc - h / 2), 7.2, h,
            boxstyle='round,pad=0.12', facecolor=fc, edgecolor=ec, lw=2))
        axR.text(4.0, yc + 0.18, tlbl, ha='center', va='center',
                 fontsize=10.5, fontweight='bold', color=ec)
        axR.text(4.0, yc - 0.24, desc, ha='center', va='center',
                 fontsize=8.5, color=C['dark'])

    # control lines: 20mK → 4K (many)
    for xi in np.linspace(1.2, 6.8, 14):
        axR.plot([xi, xi], [2.76, 3.65], color=C['mid'], lw=0.9, alpha=0.55, zorder=5)
    axR.text(4.0, 3.25, '← 控制线 >100条 →', ha='center', fontsize=8.5,
             color=C['mid'], zorder=6)

    # control lines: 4K → 300K (few, after integration)
    for xi in np.linspace(2.8, 5.2, 5):
        axR.plot([xi, xi], [5.16, 6.06], color=C['mid'], lw=1.2, alpha=0.6, zorder=5)
    axR.text(4.0, 5.65, '← 集成后大幅减少 →', ha='center', fontsize=8.5,
             color=C['green'], zorder=6)

    # reduction bracket
    axR.annotate('', xy=(7.25, 6.06), xytext=(7.25, 3.65),
                 arrowprops=dict(arrowstyle='<->', color=C['green'], lw=1.5))
    axR.text(7.5, 4.85, '互连\n减少', ha='left', va='center', fontsize=8,
             color=C['green'])

    plt.savefig(os.path.join(OUT, 'svg5_architecture.svg'), **SAVE_KW)
    plt.close()
    print('svg5_architecture.svg  ✓')


if __name__ == '__main__':
    draw_svg2()
    draw_svg3()
    draw_svg4()
    draw_svg5()
    print('\nAll done. Embed in markdown with:')
    print('  <div>{% include "科研方向/svg2_interference.svg" %}</div>')
    print('  or copy the <svg>…</svg> block directly into the .md file.')
