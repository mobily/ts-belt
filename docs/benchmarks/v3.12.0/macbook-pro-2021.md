---
id: macbook-pro-2021
title: MacBook Pro (M1 Max, 2021)
---

| Processor | Memory | Node | Author |
|-----------|--------|------|-------|
| Apple M1 Max | 64 GB | v16.13.0 | [@mobily](https://github.com/mobily) |

### map-filter-reduce

_map → filter → reduce_

```bash
✔  @mobily/ts-belt  253,020.17  ops/sec  ±0.27%  (98 runs)  fastest
███████████████████████████████████████████████████████████████████


✔  remeda            26,874.09  ops/sec  ±0.64%  (95 runs)  -89.38%
███████


✔  ramda            134,861.49  ops/sec  ±0.22%  (98 runs)  -46.70%
███████████████████████████████████


✔  rambda           248,049.04  ops/sec  ±0.50%  (98 runs)  -1.96%
█████████████████████████████████████████████████████████████████


✔  lodash/fp         68,317.83  ops/sec  ±0.75%  (97 runs)  -73.00%
██████████████████


✔  native            62,999.60  ops/sec  ±1.33%  (91 runs)  -75.10%
████████████████
```

→ Fastest is **@mobily/ts-belt**

### deepFlat-uniq-groupBy

_deepFlat → uniq → groupBy_

```bash
✔  @mobily/ts-belt  2,260,876.11  ops/sec  ±0.27%  (95 runs)   fastest
██████████████████████████████████████████████████████████████████████


✔  remeda             524,045.77  ops/sec  ±0.28%  (100 runs)  -76.82%
████████████████


✔  ramda              287,379.79  ops/sec  ±0.27%  (96 runs)   -87.29%
████████


✔  rambda           1,713,783.11  ops/sec  ±1.05%  (93 runs)   -24.20%
█████████████████████████████████████████████████████


✔  lodash/fp          520,560.92  ops/sec  ±1.60%  (96 runs)   -76.98%
████████████████
```

→ Fastest is **@mobily/ts-belt**

### sort

_sort (single function call)_

```bash
✔  @mobily/ts-belt  5,304,304.19  ops/sec  ±0.45%  (99 runs)   fastest
██████████████████████████████████████████████████████████████████████


✔  remeda           1,693,751.98  ops/sec  ±0.28%  (96 runs)   -68.07%
██████████████████████


✔  ramda            3,091,901.22  ops/sec  ±0.22%  (101 runs)  -41.71%
████████████████████████████████████████


✔  rambda           3,273,591.23  ops/sec  ±0.49%  (97 runs)   -38.28%
███████████████████████████████████████████


✔  native           3,265,209.24  ops/sec  ±0.44%  (100 runs)  -38.44%
███████████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

_sort (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  4,997,760.40  ops/sec  ±0.38%  (99 runs)   fastest
██████████████████████████████████████████████████████████████████████


✔  remeda           1,623,593.44  ops/sec  ±0.54%  (99 runs)   -67.51%
██████████████████████


✔  ramda            1,381,892.32  ops/sec  ±0.42%  (98 runs)   -72.35%
███████████████████


✔  rambda           2,979,291.44  ops/sec  ±0.47%  (100 runs)  -40.39%
█████████████████████████████████████████


✔  native           3,152,820.81  ops/sec  ±0.92%  (100 runs)  -36.92%
████████████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

### unzip

_unzip (single function call)_

```bash
✔  @mobily/ts-belt  49,075,454.44  ops/sec  ±0.60%  (87 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  ramda             6,952,722.16  ops/sec  ±0.22%  (101 runs)  -85.83%
██████████


✔  rambda           10,544,332.90  ops/sec  ±0.17%  (102 runs)  -78.51%
███████████████


✔  lodash/fp         2,243,420.67  ops/sec  ±0.75%  (97 runs)   -95.43%
███
```

→ Fastest is **@mobily/ts-belt**

_unzip (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  38,030,212.42  ops/sec  ±0.44%  (98 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  ramda             2,195,423.78  ops/sec  ±0.56%  (99 runs)  -94.23%
████


✔  rambda            8,854,442.21  ops/sec  ±1.05%  (94 runs)  -76.72%
████████████████


✔  lodash/fp         1,885,820.94  ops/sec  ±0.67%  (93 runs)  -95.04%
███
```

→ Fastest is **@mobily/ts-belt**

### flat

_flat (single function call)_

```bash
✔  @mobily/ts-belt  30,521,546.89  ops/sec  ±0.18%  (98 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            3,397,094.10  ops/sec  ±0.18%  (100 runs)  -88.87%
███████


✔  ramda             1,794,248.84  ops/sec  ±0.22%  (100 runs)  -94.12%
████


✔  lodash/fp        16,208,292.07  ops/sec  ±0.79%  (93 runs)   -46.90%
█████████████████████████████████████


✔  native            1,265,762.86  ops/sec  ±0.43%  (99 runs)   -95.85%
██
```

→ Fastest is **@mobily/ts-belt**

_flat (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  29,150,784.83  ops/sec  ±0.97%  (96 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,736,715.42  ops/sec  ±1.32%  (100 runs)  -90.61%
██████


✔  ramda             1,082,382.19  ops/sec  ±0.37%  (96 runs)   -96.29%
██


✔  lodash/fp         6,478,409.09  ops/sec  ±0.82%  (98 runs)   -77.78%
███████████████


✔  native            1,255,698.50  ops/sec  ±0.28%  (100 runs)  -95.69%
███
```

→ Fastest is **@mobily/ts-belt**

### dropWhile

_dropWhile (single function call)_

```bash
✔  @mobily/ts-belt  44,891,033.10  ops/sec  ±0.30%  (100 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  ramda            15,809,153.73  ops/sec  ±0.19%  (99 runs)   -64.78%
█████████████████████████


✔  rambda           41,319,601.22  ops/sec  ±0.39%  (96 runs)   -7.96%
█████████████████████████████████████████████████████████████████


✔  lodash/fp        12,994,537.13  ops/sec  ±0.58%  (98 runs)   -71.05%
████████████████████
```

→ Fastest is **@mobily/ts-belt**

_dropWhile (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  33,878,496.63  ops/sec  ±1.36%  (95 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  ramda             2,123,967.28  ops/sec  ±0.42%  (100 runs)  -93.73%
████


✔  rambda           24,091,434.55  ops/sec  ±0.83%  (99 runs)   -28.89%
██████████████████████████████████████████████████


✔  lodash/fp         1,002,762.99  ops/sec  ±1.26%  (96 runs)   -97.04%
██
```

→ Fastest is **@mobily/ts-belt**

### takeWhile

_takeWhile (single function call)_

```bash
✔  @mobily/ts-belt  53,724,778.84  ops/sec  ±0.15%  (98 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda            3,495,654.57  ops/sec  ±0.20%  (95 runs)  -93.49%
████


✔  ramda            16,279,553.13  ops/sec  ±0.13%  (98 runs)  -69.70%
█████████████████████


✔  rambda           48,171,432.50  ops/sec  ±1.16%  (98 runs)  -10.34%
██████████████████████████████████████████████████████████████


✔  lodash/fp        14,119,854.09  ops/sec  ±0.71%  (98 runs)  -73.72%
██████████████████
```

→ Fastest is **@mobily/ts-belt**

_takeWhile (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  36,340,182.27  ops/sec  ±1.00%  (100 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            3,384,325.38  ops/sec  ±0.74%  (97 runs)   -90.69%
██████


✔  ramda             2,139,016.63  ops/sec  ±0.42%  (95 runs)   -94.11%
████


✔  rambda           25,363,099.85  ops/sec  ±0.88%  (95 runs)   -30.21%
█████████████████████████████████████████████████


✔  lodash/fp           901,944.10  ops/sec  ±1.30%  (95 runs)   -97.52%
█
```

→ Fastest is **@mobily/ts-belt**

### difference

_difference (single function call)_

```bash
✔  @mobily/ts-belt  13,187,080.28  ops/sec  ±0.32%  (97 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda            2,623,301.77  ops/sec  ±0.11%  (99 runs)  -80.11%
█████████████


✔  ramda             5,694,886.94  ops/sec  ±0.93%  (97 runs)  -56.81%
██████████████████████████████


✔  rambda            5,090,995.10  ops/sec  ±1.10%  (98 runs)  -61.39%
███████████████████████████


✔  lodash/fp         5,698,758.00  ops/sec  ±0.77%  (97 runs)  -56.79%
██████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

_difference (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  11,426,963.94  ops/sec  ±0.86%  (96 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,448,439.18  ops/sec  ±0.96%  (94 runs)   -78.57%
███████████████


✔  ramda             1,796,078.62  ops/sec  ±0.63%  (101 runs)  -84.28%
███████████


✔  rambda            4,679,785.11  ops/sec  ±0.81%  (93 runs)   -59.05%
█████████████████████████████


✔  lodash/fp         1,023,969.24  ops/sec  ±1.15%  (99 runs)   -91.04%
██████
```

→ Fastest is **@mobily/ts-belt**

### deepFlat

_deepFlat (single function call)_

```bash
✔  @mobily/ts-belt  17,271,946.01  ops/sec  ±0.30%  (97 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            1,568,738.76  ops/sec  ±0.19%  (97 runs)   -90.92%
██████


✔  ramda               751,186.22  ops/sec  ±0.27%  (98 runs)   -95.65%
███


✔  rambda           15,336,647.13  ops/sec  ±0.70%  (101 runs)  -11.20%
███████████████████████████████████████████████████████████████


✔  lodash/fp         7,171,289.08  ops/sec  ±0.53%  (98 runs)   -58.48%
█████████████████████████████


✔  native            1,040,974.85  ops/sec  ±0.24%  (98 runs)   -93.97%
████
```

→ Fastest is **@mobily/ts-belt**

_deepFlat (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  16,822,161.81  ops/sec  ±0.62%  (95 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            1,295,302.67  ops/sec  ±0.97%  (101 runs)  -92.30%
█████


✔  ramda               579,245.79  ops/sec  ±0.43%  (101 runs)  -96.56%
██


✔  rambda           12,324,644.10  ops/sec  ±0.69%  (97 runs)   -26.74%
████████████████████████████████████████████████████


✔  lodash/fp         4,637,952.82  ops/sec  ±0.65%  (98 runs)   -72.43%
███████████████████


✔  native            1,030,475.28  ops/sec  ±0.35%  (100 runs)  -93.87%
████
```

→ Fastest is **@mobily/ts-belt**

### reduce

_reduce (single function call)_

```bash
✔  @mobily/ts-belt  44,923,143.29  ops/sec  ±0.22%  (100 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,786,737.27  ops/sec  ±0.13%  (100 runs)  -93.80%
████


✔  ramda            10,399,793.36  ops/sec  ±0.17%  (99 runs)   -76.85%
████████████████


✔  rambda           15,869,507.41  ops/sec  ±1.22%  (95 runs)   -64.67%
█████████████████████████


✔  lodash/fp        10,341,691.05  ops/sec  ±1.27%  (96 runs)   -76.98%
████████████████


✔  native           16,281,647.70  ops/sec  ±0.70%  (99 runs)   -63.76%
█████████████████████████
```

→ Fastest is **@mobily/ts-belt**

_reduce (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  29,409,267.75  ops/sec  ±0.99%  (96 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda            2,673,977.23  ops/sec  ±0.76%  (98 runs)  -90.91%
██████


✔  ramda             1,916,567.87  ops/sec  ±0.42%  (98 runs)  -93.48%
████


✔  rambda            7,816,845.65  ops/sec  ±0.91%  (98 runs)  -73.42%
██████████████████


✔  lodash/fp           991,647.18  ops/sec  ±1.26%  (98 runs)  -96.63%
██


✔  native           13,651,081.54  ops/sec  ±0.70%  (97 runs)  -53.58%
████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

### reject

_reject (single function call)_

```bash
✔  @mobily/ts-belt  44,043,265.56  ops/sec  ±0.28%  (100 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,838,238.27  ops/sec  ±0.13%  (101 runs)  -93.56%
████


✔  ramda            16,223,619.66  ops/sec  ±0.62%  (95 runs)   -63.16%
██████████████████████████


✔  rambda           43,974,630.71  ops/sec  ±1.16%  (95 runs)   -0.16%
██████████████████████████████████████████████████████████████████████


✔  lodash/fp         7,487,452.79  ops/sec  ±0.86%  (99 runs)   -83.00%
████████████
```

→ Fastest is **@mobily/ts-belt**

_reject (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  30,052,770.73  ops/sec  ±0.91%  (94 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,481,506.84  ops/sec  ±0.35%  (100 runs)  -91.74%
█████


✔  ramda             2,163,751.46  ops/sec  ±0.66%  (97 runs)   -92.80%
█████


✔  rambda           22,977,125.03  ops/sec  ±0.93%  (92 runs)   -23.54%
██████████████████████████████████████████████████████


✔  lodash/fp           910,975.55  ops/sec  ±1.15%  (99 runs)   -96.97%
██
```

→ Fastest is **@mobily/ts-belt**

### intersection

_intersection (single function call)_

```bash
✔  @mobily/ts-belt  14,684,862.88  ops/sec  ±0.46%  (96 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            1,730,733.06  ops/sec  ±0.36%  (98 runs)   -88.21%
████████


✔  ramda             1,232,282.39  ops/sec  ±0.42%  (97 runs)   -91.61%
█████


✔  rambda           11,701,015.26  ops/sec  ±0.82%  (92 runs)   -20.32%
████████████████████████████████████████████████████████


✔  lodash/fp         3,718,001.01  ops/sec  ±0.78%  (100 runs)  -74.68%
█████████████████
```

→ Fastest is **@mobily/ts-belt**

_intersection (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  14,406,549.94  ops/sec  ±1.24%  (96 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda            1,622,333.72  ops/sec  ±1.04%  (90 runs)  -88.74%
███████


✔  ramda               800,003.56  ops/sec  ±0.81%  (95 runs)  -94.45%
███


✔  rambda            8,692,796.71  ops/sec  ±0.52%  (97 runs)  -39.66%
██████████████████████████████████████████


✔  lodash/fp           866,442.83  ops/sec  ±1.15%  (96 runs)  -93.99%
████
```

→ Fastest is **@mobily/ts-belt**

### intersperse

_intersperse (single function call)_

```bash
✔  @mobily/ts-belt  41,860,996.84  ops/sec  ±0.39%  (96 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  ramda            41,348,267.68  ops/sec  ±0.36%  (98 runs)  -1.22%
█████████████████████████████████████████████████████████████████████


✔  rambda           41,179,340.31  ops/sec  ±0.33%  (99 runs)  -1.63%
████████████████████████████████████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

_intersperse (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  29,276,594.71  ops/sec  ±0.93%  (96 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  ramda             2,479,197.54  ops/sec  ±0.80%  (97 runs)  -91.53%
█████


✔  rambda           22,286,666.59  ops/sec  ±1.00%  (92 runs)  -23.88%
█████████████████████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

### fromPairs

_fromPairs (single function call)_

```bash
✔  @mobily/ts-belt  19,545,099.13  ops/sec  ±0.22%  (98 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda           18,114,755.39  ops/sec  ±0.19%  (101 runs)  -7.32%
█████████████████████████████████████████████████████████████████


✔  ramda             8,546,903.17  ops/sec  ±0.15%  (101 runs)  -56.27%
███████████████████████████████


✔  rambda           16,636,574.44  ops/sec  ±1.51%  (94 runs)   -14.88%
████████████████████████████████████████████████████████████


✔  lodash/fp        13,862,529.47  ops/sec  ±2.19%  (95 runs)   -29.07%
██████████████████████████████████████████████████


✔  native           14,266,758.48  ops/sec  ±1.25%  (100 runs)  -27.01%
███████████████████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

_fromPairs (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  18,885,110.24  ops/sec  ±1.88%  (95 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda           13,129,553.22  ops/sec  ±0.40%  (95 runs)  -30.48%
████████████████████████████████████████████████


✔  ramda             2,338,697.80  ops/sec  ±0.56%  (98 runs)  -87.62%
████████


✔  rambda           13,503,459.80  ops/sec  ±1.22%  (98 runs)  -28.50%
██████████████████████████████████████████████████


✔  lodash/fp         2,773,528.32  ops/sec  ±1.15%  (98 runs)  -85.31%
██████████


✔  native           14,228,786.28  ops/sec  ±1.50%  (97 runs)  -24.66%
████████████████████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

### union

_union (single function call)_

```bash
✔  @mobily/ts-belt  14,341,981.87  ops/sec  ±0.16%  (101 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  ramda             1,163,249.83  ops/sec  ±0.13%  (96 runs)   -91.89%
█████


✔  rambda           11,930,189.41  ops/sec  ±0.31%  (99 runs)   -16.82%
███████████████████████████████████████████████████████████


✔  lodash/fp         4,705,855.87  ops/sec  ±1.06%  (99 runs)   -67.19%
███████████████████████
```

→ Fastest is **@mobily/ts-belt**

_union (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  11,819,814.63  ops/sec  ±0.58%  (100 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  ramda               764,493.70  ops/sec  ±0.52%  (100 runs)  -93.53%
████


✔  rambda            9,668,052.86  ops/sec  ±0.56%  (97 runs)   -18.20%
██████████████████████████████████████████████████████████


✔  lodash/fp           942,912.40  ops/sec  ±1.22%  (100 runs)  -92.02%
█████
```

→ Fastest is **@mobily/ts-belt**

### groupBy

_groupBy (single function call)_

```bash
✔  @mobily/ts-belt  6,618,284.06  ops/sec  ±0.16%  (101 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda           1,887,881.31  ops/sec  ±0.18%  (96 runs)   -71.47%
███████████████████


✔  ramda            1,715,705.70  ops/sec  ±0.16%  (101 runs)  -74.08%
██████████████████


✔  rambda           6,246,372.24  ops/sec  ±1.54%  (100 runs)  -5.62%
██████████████████████████████████████████████████████████████████


✔  lodash/fp        3,251,346.92  ops/sec  ±0.34%  (97 runs)   -50.87%
██████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

_groupBy (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  5,930,680.92  ops/sec  ±1.14%  (90 runs)   fastest
██████████████████████████████████████████████████████████████████████


✔  remeda           1,787,348.96  ops/sec  ±0.97%  (97 runs)   -69.86%
█████████████████████


✔  ramda              945,708.15  ops/sec  ±0.72%  (95 runs)   -84.05%
███████████


✔  rambda           5,312,063.54  ops/sec  ±1.00%  (101 runs)  -10.43%
██████████████████████████████████████████████████████████████


✔  lodash/fp          820,030.11  ops/sec  ±1.15%  (100 runs)  -86.17%
█████████
```

→ Fastest is **@mobily/ts-belt**

### zip

_zip (single function call)_

```bash
✔  @mobily/ts-belt  25,958,856.92  ops/sec  ±0.15%  (94 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            3,159,148.92  ops/sec  ±0.31%  (99 runs)   -87.83%
████████


✔  ramda            22,497,101.13  ops/sec  ±0.11%  (100 runs)  -13.34%
█████████████████████████████████████████████████████████████


✔  rambda           21,713,051.80  ops/sec  ±2.33%  (100 runs)  -16.36%
███████████████████████████████████████████████████████████


✔  lodash/fp         4,450,925.88  ops/sec  ±1.10%  (101 runs)  -82.85%
████████████
```

→ Fastest is **@mobily/ts-belt**

_zip (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  17,236,945.56  ops/sec  ±1.58%  (95 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda            3,083,228.32  ops/sec  ±0.35%  (98 runs)  -82.11%
████████████


✔  ramda             2,295,488.25  ops/sec  ±0.91%  (96 runs)  -86.68%
█████████


✔  rambda           14,201,168.34  ops/sec  ±1.63%  (94 runs)  -17.61%
█████████████████████████████████████████████████████████


✔  lodash/fp           972,989.85  ops/sec  ±0.37%  (98 runs)  -94.36%
███
```

→ Fastest is **@mobily/ts-belt**

### forEach

_forEach (single function call)_

```bash
✔  @mobily/ts-belt  156,203,911.02  ops/sec  ±0.12%  (99 runs)   -0.14%
███████████████████████████████████████████████████████████████████████


✔  remeda             3,201,055.95  ops/sec  ±0.60%  (98 runs)   -97.95%
█


✔  ramda            153,583,896.69  ops/sec  ±0.95%  (99 runs)   -1.82%
██████████████████████████████████████████████████████████████████████


✔  rambda           156,428,240.76  ops/sec  ±0.13%  (100 runs)  fastest
████████████████████████████████████████████████████████████████████████


✔  lodash/fp          8,487,633.99  ops/sec  ±0.53%  (98 runs)   -94.57%
███


✔  native            24,436,840.87  ops/sec  ±0.19%  (102 runs)  -84.38%
███████████
```

→ Fastest is **rambda**

_forEach (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  86,407,632.84  ops/sec  ±0.37%  (98 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda            2,567,929.51  ops/sec  ±0.98%  (99 runs)  -97.03%
██


✔  ramda             2,553,884.53  ops/sec  ±0.45%  (97 runs)  -97.04%
██


✔  rambda           42,539,075.88  ops/sec  ±0.22%  (96 runs)  -50.77%
██████████████████████████████████


✔  lodash/fp           948,212.86  ops/sec  ±1.22%  (96 runs)  -98.90%



✔  native           18,887,983.87  ops/sec  ±0.41%  (97 runs)  -78.14%
███████████████
```

→ Fastest is **@mobily/ts-belt**

### uniq

_uniq (single function call)_

```bash
✔  @mobily/ts-belt  18,214,089.85  ops/sec  ±0.38%  (97 runs)  -24.10%
█████████████████████████████████████████████████████


✔  remeda            2,307,585.92  ops/sec  ±0.19%  (99 runs)  -90.38%
██████


✔  ramda             1,037,891.27  ops/sec  ±0.13%  (99 runs)  -95.68%
███


✔  rambda            4,609,863.49  ops/sec  ±0.57%  (98 runs)  -80.79%
█████████████


✔  lodash/fp        23,998,922.39  ops/sec  ±1.09%  (94 runs)  fastest
██████████████████████████████████████████████████████████████████████
```

→ Fastest is **lodash/fp**

_uniq (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  17,531,162.97  ops/sec  ±0.78%  (96 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda            2,322,689.85  ops/sec  ±0.95%  (95 runs)  -86.75%
█████████


✔  ramda               746,778.52  ops/sec  ±0.64%  (99 runs)  -95.74%
██


✔  rambda            3,779,744.56  ops/sec  ±0.73%  (99 runs)  -78.44%
███████████████


✔  lodash/fp         8,137,641.36  ops/sec  ±1.02%  (94 runs)  -53.58%
████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

### toPairs

_toPairs (single function call)_

```bash
✔  @mobily/ts-belt  43,143,569.14  ops/sec  ±0.23%  (99 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda           42,581,794.99  ops/sec  ±0.50%  (100 runs)  -1.30%
██████████████████████████████████████████████████████████████████████


✔  ramda            10,981,148.87  ops/sec  ±0.32%  (97 runs)   -74.55%
██████████████████


✔  rambda           41,002,721.94  ops/sec  ±1.79%  (94 runs)   -4.96%
███████████████████████████████████████████████████████████████████


✔  lodash/fp        12,176,002.61  ops/sec  ±1.70%  (94 runs)   -71.78%
████████████████████


✔  native           42,315,986.34  ops/sec  ±0.63%  (94 runs)   -1.92%
█████████████████████████████████████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

_toPairs (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  41,353,750.37  ops/sec  ±1.73%  (97 runs)   -1.18%
██████████████████████████████████████████████████████████████████████


✔  remeda           23,573,721.71  ops/sec  ±1.51%  (99 runs)   -43.67%
███████████████████████████████████████


✔  ramda             2,533,467.16  ops/sec  ±0.64%  (97 runs)   -93.95%
████


✔  rambda           25,327,785.25  ops/sec  ±1.39%  (98 runs)   -39.48%
██████████████████████████████████████████


✔  lodash/fp         5,888,801.90  ops/sec  ±1.05%  (98 runs)   -85.93%
█████████


✔  native           41,848,882.59  ops/sec  ±0.34%  (101 runs)  fastest
███████████████████████████████████████████████████████████████████████
```

→ Fastest is **native,@mobily/ts-belt**

### map

_map (single function call)_

```bash
✔  @mobily/ts-belt  82,645,624.26  ops/sec  ±0.67%  (99 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            3,091,702.97  ops/sec  ±0.85%  (96 runs)   -96.26%
██


✔  ramda            20,514,451.43  ops/sec  ±0.46%  (100 runs)  -75.18%
█████████████████


✔  rambda           81,425,464.99  ops/sec  ±0.89%  (89 runs)   -1.48%
█████████████████████████████████████████████████████████████████████


✔  lodash/fp        13,251,776.36  ops/sec  ±0.83%  (100 runs)  -83.97%
███████████


✔  native           18,204,725.08  ops/sec  ±0.36%  (98 runs)   -77.97%
███████████████
```

→ Fastest is **@mobily/ts-belt**

_map (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  48,997,264.06  ops/sec  ±0.47%  (98 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,533,638.34  ops/sec  ±0.96%  (91 runs)   -94.83%
███


✔  ramda             2,301,456.00  ops/sec  ±0.52%  (100 runs)  -95.30%
███


✔  rambda           33,900,489.21  ops/sec  ±0.45%  (99 runs)   -30.81%
█████████████████████████████████████████████████


✔  lodash/fp           902,639.27  ops/sec  ±1.12%  (101 runs)  -98.16%
█


✔  native           15,107,073.31  ops/sec  ±0.49%  (96 runs)   -69.17%
█████████████████████
```

→ Fastest is **@mobily/ts-belt**

### filter

_filter (single function call)_

```bash
✔  @mobily/ts-belt  48,440,819.15  ops/sec  ±0.53%  (100 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,773,584.36  ops/sec  ±0.18%  (100 runs)  -94.27%
████


✔  ramda            17,289,091.19  ops/sec  ±0.14%  (101 runs)  -64.31%
█████████████████████████


✔  rambda           47,109,967.97  ops/sec  ±1.19%  (97 runs)   -2.75%
█████████████████████████████████████████████████████████████████████


✔  lodash/fp         7,599,130.60  ops/sec  ±0.89%  (98 runs)   -84.31%
███████████


✔  native           15,283,174.90  ops/sec  ±0.66%  (94 runs)   -68.45%
██████████████████████
```

→ Fastest is **@mobily/ts-belt**

_filter (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  36,306,235.07  ops/sec  ±1.01%  (97 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,483,253.65  ops/sec  ±0.87%  (99 runs)   -93.16%
████


✔  ramda             2,279,818.10  ops/sec  ±0.50%  (100 runs)  -93.72%
████


✔  rambda           25,926,233.91  ops/sec  ±0.82%  (99 runs)   -28.59%
██████████████████████████████████████████████████


✔  lodash/fp           906,913.60  ops/sec  ±1.15%  (97 runs)   -97.50%
█


✔  native           13,652,052.41  ops/sec  ±0.62%  (101 runs)  -62.40%
██████████████████████████
```

→ Fastest is **@mobily/ts-belt**

### find

_find (single function call)_

```bash
✔  @mobily/ts-belt  147,374,562.75  ops/sec  ±0.74%  (100 runs)  -5.14%
████████████████████████████████████████████████████████████████████


✔  remeda             3,519,269.73  ops/sec  ±0.52%  (97 runs)   -97.73%
█


✔  ramda             30,505,829.82  ops/sec  ±0.52%  (98 runs)   -80.36%
██████████████


✔  rambda           155,354,649.55  ops/sec  ±0.25%  (100 runs)  fastest
████████████████████████████████████████████████████████████████████████


✔  lodash/fp          9,476,441.72  ops/sec  ±0.48%  (96 runs)   -93.90%
████


✔  native            34,590,309.13  ops/sec  ±0.18%  (100 runs)  -77.73%
████████████████
```

→ Fastest is **rambda**

_find (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  79,354,816.28  ops/sec  ±0.71%  (96 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,857,336.27  ops/sec  ±0.92%  (98 runs)   -96.40%
██


✔  ramda             2,401,157.43  ops/sec  ±0.53%  (96 runs)   -96.97%
██


✔  rambda           39,859,500.58  ops/sec  ±0.33%  (99 runs)   -49.77%
███████████████████████████████████


✔  lodash/fp           933,667.63  ops/sec  ±1.11%  (100 runs)  -98.82%



✔  native           25,330,641.20  ops/sec  ±0.27%  (97 runs)   -68.08%
██████████████████████
```

→ Fastest is **@mobily/ts-belt**

### splitEvery

_splitEvery/chunk (single function call)_

```bash
✔  @mobily/ts-belt  26,832,553.74  ops/sec  ±0.30%  (91 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,981,539.91  ops/sec  ±0.17%  (100 runs)  -88.89%
███████


✔  ramda             9,808,008.42  ops/sec  ±1.02%  (95 runs)   -63.45%
█████████████████████████


✔  rambda           13,787,116.22  ops/sec  ±1.09%  (99 runs)   -48.62%
████████████████████████████████████


✔  lodash/fp        11,390,930.87  ops/sec  ±1.36%  (94 runs)   -57.55%
██████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

_splitEvery/chunk (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  21,023,369.46  ops/sec  ±0.59%  (93 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda            3,632,436.59  ops/sec  ±1.01%  (98 runs)  -82.72%
████████████


✔  ramda             1,816,579.43  ops/sec  ±0.52%  (96 runs)  -91.36%
██████


✔  rambda           10,651,228.05  ops/sec  ±1.08%  (91 runs)  -49.34%
███████████████████████████████████


✔  lodash/fp           995,721.52  ops/sec  ±1.19%  (99 runs)  -95.26%
███
```

→ Fastest is **@mobily/ts-belt**
