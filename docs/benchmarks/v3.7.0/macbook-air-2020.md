---
id: macbook-air-2020
title: MacBook Air (M1, 2020)
---

| Processor | Memory | Node | Author |
|-----------|--------|------|-------|
| Apple M1 | 16 GB LPDDR4| v16.7.0 | [@Pyrolistical](https://github.com/Pyrolistical) |

### map-filter-reduce

_map → filter → reduce_

```bash
✔  @mobily/ts-belt  249,279.89  ops/sec  ±0.39%  (100 runs)  fastest
████████████████████████████████████████████████████████████████████


✔  remeda            24,276.97  ops/sec  ±1.80%  (91 runs)   -90.26%
██████


✔  ramda            130,054.37  ops/sec  ±0.49%  (93 runs)   -47.83%
███████████████████████████████████


✔  rambda           242,564.92  ops/sec  ±0.46%  (100 runs)  -2.69%
██████████████████████████████████████████████████████████████████


✔  lodash/fp        100,021.50  ops/sec  ±0.64%  (100 runs)  -59.88%
███████████████████████████


✔  native            59,209.26  ops/sec  ±1.06%  (96 runs)   -76.25%
████████████████
```

→ Fastest is **@mobily/ts-belt**

### deepFlat-uniq-groupBy

_deepFlat → uniq → groupBy_

```bash
✔  @mobily/ts-belt  2,200,954.95  ops/sec  ±0.11%  (101 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda             488,828.04  ops/sec  ±2.53%  (94 runs)   -77.79%
███████████████


✔  ramda              278,201.62  ops/sec  ±0.89%  (95 runs)   -87.36%
████████


✔  rambda           1,724,662.98  ops/sec  ±0.91%  (101 runs)  -21.64%
██████████████████████████████████████████████████████


✔  lodash/fp          525,181.96  ops/sec  ±1.00%  (99 runs)   -76.14%
████████████████
```

→ Fastest is **@mobily/ts-belt**

### sort

_sort (single function call)_

```bash
✔  @mobily/ts-belt  5,101,733.37  ops/sec  ±0.13%  (100 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda           1,495,459.41  ops/sec  ±0.72%  (99 runs)   -70.69%
████████████████████


✔  ramda            2,569,596.49  ops/sec  ±0.45%  (94 runs)   -49.63%
███████████████████████████████████


✔  rambda           2,688,097.85  ops/sec  ±0.39%  (102 runs)  -47.31%
████████████████████████████████████


✔  lodash/fp        1,691,274.30  ops/sec  ±1.67%  (100 runs)  -66.85%
███████████████████████


✔  native           2,661,290.29  ops/sec  ±0.36%  (101 runs)  -47.84%
████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

_sort (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  4,693,645.58  ops/sec  ±0.39%  (98 runs)   fastest
██████████████████████████████████████████████████████████████████████


✔  remeda           1,450,162.95  ops/sec  ±0.46%  (95 runs)   -69.10%
█████████████████████


✔  ramda            1,232,021.82  ops/sec  ±0.36%  (101 runs)  -73.75%
██████████████████


✔  rambda           2,470,907.38  ops/sec  ±0.36%  (100 runs)  -47.36%
████████████████████████████████████


✔  lodash/fp          683,887.02  ops/sec  ±1.23%  (98 runs)   -85.43%
██████████


✔  native           2,592,351.19  ops/sec  ±0.42%  (100 runs)  -44.77%
██████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

### unzip

_unzip (single function call)_

```bash
✔  @mobily/ts-belt  47,588,859.11  ops/sec  ±0.46%  (99 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  ramda             6,705,736.92  ops/sec  ±0.13%  (101 runs)  -85.91%
██████████


✔  rambda           10,034,683.21  ops/sec  ±1.01%  (100 runs)  -78.91%
██████████████


✔  lodash/fp         2,174,786.62  ops/sec  ±0.48%  (97 runs)   -95.43%
███
```

→ Fastest is **@mobily/ts-belt**

_unzip (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  36,181,039.73  ops/sec  ±0.42%  (100 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  ramda             2,133,486.67  ops/sec  ±0.27%  (100 runs)  -94.10%
████


✔  rambda            8,489,274.12  ops/sec  ±0.97%  (96 runs)   -76.54%
████████████████


✔  lodash/fp         1,848,769.38  ops/sec  ±0.74%  (99 runs)   -94.89%
███
```

→ Fastest is **@mobily/ts-belt**

### flat

_flat (single function call)_

```bash
✔  @mobily/ts-belt  30,097,829.61  ops/sec  ±0.18%  (97 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            3,172,921.28  ops/sec  ±1.48%  (96 runs)   -89.46%
███████


✔  ramda             1,753,718.59  ops/sec  ±0.39%  (95 runs)   -94.17%
████


✔  lodash/fp        15,470,058.47  ops/sec  ±0.64%  (101 runs)  -48.60%
████████████████████████████████████


✔  native            1,181,888.97  ops/sec  ±0.23%  (99 runs)   -96.07%
██
```

→ Fastest is **@mobily/ts-belt**

_flat (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  28,459,201.24  ops/sec  ±1.13%  (99 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,611,367.88  ops/sec  ±0.99%  (100 runs)  -90.82%
██████


✔  ramda             1,072,191.82  ops/sec  ±0.28%  (100 runs)  -96.23%
██


✔  lodash/fp         6,810,143.55  ops/sec  ±0.74%  (100 runs)  -76.07%
████████████████


✔  native            1,175,496.45  ops/sec  ±0.23%  (99 runs)   -95.87%
██
```

→ Fastest is **@mobily/ts-belt**

### dropWhile

_dropWhile (single function call)_

```bash
✔  @mobily/ts-belt  43,204,573.24  ops/sec  ±0.53%  (96 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  ramda            15,462,019.17  ops/sec  ±0.08%  (102 runs)  -64.21%
█████████████████████████


✔  rambda           39,734,812.96  ops/sec  ±0.90%  (101 runs)  -8.03%
█████████████████████████████████████████████████████████████████


✔  lodash/fp        12,663,299.59  ops/sec  ±0.60%  (99 runs)   -70.69%
████████████████████
```

→ Fastest is **@mobily/ts-belt**

_dropWhile (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  31,891,844.74  ops/sec  ±0.96%  (100 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  ramda             2,068,779.79  ops/sec  ±0.41%  (99 runs)   -93.51%
████


✔  rambda           22,556,872.44  ops/sec  ±0.77%  (94 runs)   -29.27%
██████████████████████████████████████████████████


✔  lodash/fp         1,010,074.74  ops/sec  ±1.12%  (99 runs)   -96.83%
██
```

→ Fastest is **@mobily/ts-belt**

### takeWhile

_takeWhile (single function call)_

```bash
✔  @mobily/ts-belt  50,622,471.27  ops/sec  ±0.48%  (96 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            3,419,352.13  ops/sec  ±0.78%  (100 runs)  -93.25%
████


✔  ramda            15,734,158.85  ops/sec  ±0.49%  (93 runs)   -68.92%
██████████████████████


✔  rambda           45,852,644.53  ops/sec  ±1.34%  (96 runs)   -9.42%
████████████████████████████████████████████████████████████████


✔  lodash/fp        13,919,043.01  ops/sec  ±0.54%  (101 runs)  -72.50%
███████████████████
```

→ Fastest is **@mobily/ts-belt**

_takeWhile (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  32,973,506.16  ops/sec  ±0.88%  (97 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            3,318,928.71  ops/sec  ±0.89%  (98 runs)   -89.93%
███████


✔  ramda             2,064,291.79  ops/sec  ±0.39%  (98 runs)   -93.74%
████


✔  rambda           23,346,726.43  ops/sec  ±0.31%  (102 runs)  -29.20%
██████████████████████████████████████████████████


✔  lodash/fp           933,628.47  ops/sec  ±1.06%  (102 runs)  -97.17%
██
```

→ Fastest is **@mobily/ts-belt**

### deepFlat

_deepFlat (single function call)_

```bash
✔  @mobily/ts-belt  17,016,812.94  ops/sec  ±0.20%  (101 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            1,468,762.41  ops/sec  ±1.69%  (98 runs)   -91.37%
██████


✔  ramda               715,879.19  ops/sec  ±0.49%  (96 runs)   -95.79%
██


✔  rambda           14,774,473.16  ops/sec  ±0.58%  (100 runs)  -13.18%
█████████████████████████████████████████████████████████████


✔  lodash/fp         7,810,104.17  ops/sec  ±0.54%  (96 runs)   -54.10%
████████████████████████████████


✔  native              935,233.46  ops/sec  ±0.20%  (98 runs)   -94.50%
███
```

→ Fastest is **@mobily/ts-belt**

_deepFlat (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  16,627,437.66  ops/sec  ±0.54%  (98 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            1,240,221.23  ops/sec  ±0.94%  (100 runs)  -92.54%
█████


✔  ramda               557,214.93  ops/sec  ±0.36%  (100 runs)  -96.65%
██


✔  rambda           11,823,291.91  ops/sec  ±0.55%  (95 runs)   -28.89%
██████████████████████████████████████████████████


✔  lodash/fp         4,426,487.30  ops/sec  ±0.73%  (100 runs)  -73.38%
██████████████████


✔  native              928,217.06  ops/sec  ±0.32%  (98 runs)   -94.42%
███
```

→ Fastest is **@mobily/ts-belt**

### reduce

_reduce (single function call)_

```bash
✔  @mobily/ts-belt  42,738,497.71  ops/sec  ±0.07%  (96 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,702,505.61  ops/sec  ±0.82%  (100 runs)  -93.68%
████


✔  ramda             9,885,454.07  ops/sec  ±0.60%  (96 runs)   -76.87%
████████████████


✔  rambda           15,083,471.52  ops/sec  ±1.62%  (92 runs)   -64.71%
█████████████████████████


✔  lodash/fp        11,057,190.32  ops/sec  ±1.00%  (100 runs)  -74.13%
██████████████████


✔  native           14,996,464.50  ops/sec  ±0.62%  (100 runs)  -64.91%
████████████████████████
```

→ Fastest is **@mobily/ts-belt**

_reduce (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  27,277,018.00  ops/sec  ±0.83%  (99 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,621,246.45  ops/sec  ±0.74%  (98 runs)   -90.39%
██████


✔  ramda             1,820,394.15  ops/sec  ±0.25%  (100 runs)  -93.33%
████


✔  rambda            7,420,526.90  ops/sec  ±0.83%  (101 runs)  -72.80%
███████████████████


✔  lodash/fp           993,928.83  ops/sec  ±1.15%  (100 runs)  -96.36%
██


✔  native           12,355,055.35  ops/sec  ±0.57%  (101 runs)  -54.71%
████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

### reject

_reject (single function call)_

```bash
✔  @mobily/ts-belt  41,134,639.03  ops/sec  ±0.43%  (99 runs)  -1.31%
█████████████████████████████████████████████████████████████████████


✔  remeda            2,707,621.33  ops/sec  ±0.99%  (99 runs)  -93.50%
████


✔  ramda            15,434,043.01  ops/sec  ±0.92%  (94 runs)  -62.97%
█████████████████████████


✔  rambda           41,682,684.37  ops/sec  ±1.37%  (96 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  lodash/fp         7,194,152.15  ops/sec  ±0.57%  (94 runs)  -82.74%
████████████
```

→ Fastest is **rambda**

_reject (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  28,162,294.24  ops/sec  ±1.03%  (100 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,405,546.62  ops/sec  ±0.75%  (98 runs)   -91.46%
██████


✔  ramda             2,128,836.87  ops/sec  ±0.45%  (102 runs)  -92.44%
█████


✔  rambda           20,966,289.87  ops/sec  ±0.65%  (101 runs)  -25.55%
████████████████████████████████████████████████████


✔  lodash/fp           865,317.60  ops/sec  ±1.07%  (101 runs)  -96.93%
██
```

→ Fastest is **@mobily/ts-belt**

### intersperse

_intersperse (single function call)_

```bash
✔  @mobily/ts-belt  40,064,246.68  ops/sec  ±0.13%  (100 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  ramda            39,049,651.47  ops/sec  ±0.15%  (99 runs)   -2.53%
█████████████████████████████████████████████████████████████████████


✔  rambda           39,468,384.45  ops/sec  ±1.48%  (93 runs)   -1.49%
█████████████████████████████████████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

_intersperse (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  27,862,516.03  ops/sec  ±0.83%  (100 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  ramda             2,376,266.69  ops/sec  ±0.47%  (101 runs)  -91.47%
██████


✔  rambda           20,683,082.73  ops/sec  ±0.77%  (99 runs)   -25.77%
████████████████████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

### fromPairs

_fromPairs (single function call)_

```bash
✔  @mobily/ts-belt  19,416,008.78  ops/sec  ±0.05%  (99 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda           17,511,630.07  ops/sec  ±1.49%  (97 runs)   -9.81%
████████████████████████████████████████████████████████████████


✔  ramda             8,477,718.23  ops/sec  ±1.00%  (99 runs)   -56.34%
███████████████████████████████


✔  rambda           16,827,952.34  ops/sec  ±1.85%  (98 runs)   -13.33%
█████████████████████████████████████████████████████████████


✔  lodash/fp        13,886,757.40  ops/sec  ±1.26%  (97 runs)   -28.48%
██████████████████████████████████████████████████


✔  native            2,758,522.55  ops/sec  ±0.44%  (101 runs)  -85.79%
██████████
```

→ Fastest is **@mobily/ts-belt**

_fromPairs (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  18,451,864.54  ops/sec  ±1.53%  (97 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda           12,644,595.10  ops/sec  ±1.19%  (99 runs)   -31.47%
████████████████████████████████████████████████


✔  ramda             2,282,752.21  ops/sec  ±0.73%  (99 runs)   -87.63%
████████


✔  rambda           12,936,245.61  ops/sec  ±1.24%  (93 runs)   -29.89%
█████████████████████████████████████████████████


✔  lodash/fp         2,781,153.58  ops/sec  ±0.97%  (101 runs)  -84.93%
██████████


✔  native            2,761,902.01  ops/sec  ±0.37%  (100 runs)  -85.03%
██████████
```

→ Fastest is **@mobily/ts-belt**

### groupBy

_groupBy (single function call)_

```bash
✔  @mobily/ts-belt  6,121,027.69  ops/sec  ±0.60%  (99 runs)   fastest
██████████████████████████████████████████████████████████████████████


✔  remeda           1,773,194.37  ops/sec  ±0.94%  (100 runs)  -71.03%
████████████████████


✔  ramda            1,549,926.79  ops/sec  ±1.05%  (97 runs)   -74.68%
█████████████████


✔  rambda           5,943,278.81  ops/sec  ±1.01%  (102 runs)  -2.90%
███████████████████████████████████████████████████████████████████


✔  lodash/fp        3,210,313.82  ops/sec  ±0.72%  (98 runs)   -47.55%
████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

_groupBy (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  5,490,143.98  ops/sec  ±1.27%  (99 runs)   fastest
██████████████████████████████████████████████████████████████████████


✔  remeda           1,712,816.14  ops/sec  ±0.73%  (102 runs)  -68.80%
█████████████████████


✔  ramda              934,547.98  ops/sec  ±0.62%  (101 runs)  -82.98%
███████████


✔  rambda           4,943,117.70  ops/sec  ±0.91%  (100 runs)  -9.96%
███████████████████████████████████████████████████████████████


✔  lodash/fp          801,736.27  ops/sec  ±1.05%  (100 runs)  -85.40%
██████████
```

→ Fastest is **@mobily/ts-belt**

### zip

_zip (single function call)_

```bash
✔  @mobily/ts-belt  24,435,170.38  ops/sec  ±0.20%  (96 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,993,792.11  ops/sec  ±1.93%  (98 runs)   -87.75%
████████


✔  ramda            20,064,529.17  ops/sec  ±2.39%  (92 runs)   -17.89%
██████████████████████████████████████████████████████████


✔  rambda           21,205,982.64  ops/sec  ±1.62%  (101 runs)  -13.22%
█████████████████████████████████████████████████████████████


✔  lodash/fp         5,881,424.01  ops/sec  ±1.17%  (97 runs)   -75.93%
█████████████████
```

→ Fastest is **@mobily/ts-belt**

_zip (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  16,110,793.53  ops/sec  ±2.05%  (96 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,982,872.72  ops/sec  ±0.90%  (100 runs)  -81.49%
█████████████


✔  ramda             2,229,731.56  ops/sec  ±0.76%  (99 runs)   -86.16%
█████████


✔  rambda           12,811,657.84  ops/sec  ±1.37%  (101 runs)  -20.48%
████████████████████████████████████████████████████████


✔  lodash/fp         1,026,186.79  ops/sec  ±1.10%  (100 runs)  -93.63%
████
```

→ Fastest is **@mobily/ts-belt**

### forEach

_forEach (single function call)_

```bash
✔  @mobily/ts-belt  151,522,502.20  ops/sec  ±1.09%  (97 runs)   -0.93%
███████████████████████████████████████████████████████████████████████


✔  remeda             3,155,520.10  ops/sec  ±0.57%  (96 runs)   -97.94%
█


✔  ramda            150,488,946.35  ops/sec  ±0.93%  (101 runs)  -1.61%
██████████████████████████████████████████████████████████████████████


✔  rambda           152,944,208.48  ops/sec  ±0.04%  (102 runs)  fastest
████████████████████████████████████████████████████████████████████████


✔  lodash/fp         16,238,687.16  ops/sec  ±0.58%  (100 runs)  -89.38%
███████


✔  native            21,061,643.09  ops/sec  ±0.14%  (102 runs)  -86.23%
█████████
```

→ Fastest is **rambda**

_forEach (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  80,060,371.34  ops/sec  ±0.38%  (99 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,480,371.88  ops/sec  ±0.80%  (98 runs)   -96.90%
██


✔  ramda             2,497,713.89  ops/sec  ±0.25%  (101 runs)  -96.88%
██


✔  rambda           38,734,852.35  ops/sec  ±0.20%  (94 runs)   -51.62%
██████████████████████████████████


✔  lodash/fp         1,041,207.17  ops/sec  ±1.13%  (100 runs)  -98.70%



✔  native           17,466,000.74  ops/sec  ±0.22%  (100 runs)  -78.18%
███████████████
```

→ Fastest is **@mobily/ts-belt**

### uniq

_uniq (single function call)_

```bash
✔  @mobily/ts-belt  17,698,097.60  ops/sec  ±0.39%  (93 runs)  -23.81%
█████████████████████████████████████████████████████


✔  remeda            2,126,034.40  ops/sec  ±1.46%  (95 runs)  -90.85%
██████


✔  ramda               973,885.81  ops/sec  ±0.51%  (98 runs)  -95.81%
██


✔  rambda            4,443,725.18  ops/sec  ±0.72%  (97 runs)  -80.87%
█████████████


✔  lodash/fp        23,228,886.66  ops/sec  ±1.09%  (94 runs)  fastest
██████████████████████████████████████████████████████████████████████
```

→ Fastest is **lodash/fp**

_uniq (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  17,116,780.17  ops/sec  ±0.78%  (98 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,219,041.94  ops/sec  ±0.76%  (101 runs)  -87.04%
█████████


✔  ramda               711,027.73  ops/sec  ±0.37%  (100 runs)  -95.85%
██


✔  rambda            3,694,072.79  ops/sec  ±0.46%  (101 runs)  -78.42%
███████████████


✔  lodash/fp         7,571,485.97  ops/sec  ±0.76%  (98 runs)   -55.77%
███████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

### toPairs

_toPairs (single function call)_

```bash
✔  @mobily/ts-belt  38,214,751.94  ops/sec  ±0.17%  (99 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda           32,858,489.19  ops/sec  ±4.42%  (89 runs)  -14.02%
████████████████████████████████████████████████████████████


✔  ramda            10,364,749.44  ops/sec  ±1.15%  (89 runs)  -72.88%
██████████████████


✔  rambda           37,603,914.79  ops/sec  ±2.20%  (96 runs)  -1.60%
████████████████████████████████████████████████████████████████████


✔  lodash/fp        14,622,303.65  ops/sec  ±1.15%  (98 runs)  -61.74%
██████████████████████████


✔  native           37,667,365.06  ops/sec  ±2.02%  (99 runs)  -1.43%
████████████████████████████████████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt,native**

_toPairs (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  37,355,068.50  ops/sec  ±1.49%  (101 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  remeda           21,886,107.49  ops/sec  ±0.27%  (101 runs)  -41.41%
█████████████████████████████████████████


✔  ramda             2,423,382.03  ops/sec  ±0.56%  (101 runs)  -93.51%
████


✔  rambda           22,910,839.53  ops/sec  ±1.24%  (100 runs)  -38.67%
███████████████████████████████████████████


✔  lodash/fp         5,921,274.30  ops/sec  ±1.02%  (95 runs)   -84.15%
███████████


✔  native           37,271,945.14  ops/sec  ±1.47%  (98 runs)   -0.22%
██████████████████████████████████████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

### map

_map (single function call)_

```bash
✔  @mobily/ts-belt  79,929,746.94  ops/sec  ±0.41%  (97 runs)   -0.90%
██████████████████████████████████████████████████████████████████████


✔  remeda            3,043,847.62  ops/sec  ±1.32%  (98 runs)   -96.23%
██


✔  ramda            19,514,681.36  ops/sec  ±0.51%  (97 runs)   -75.81%
█████████████████


✔  rambda           80,658,924.63  ops/sec  ±0.51%  (94 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  lodash/fp        13,821,648.14  ops/sec  ±0.61%  (102 runs)  -82.86%
████████████


✔  native           17,163,566.67  ops/sec  ±0.36%  (101 runs)  -78.72%
███████████████
```

→ Fastest is **rambda**

_map (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  46,639,454.08  ops/sec  ±0.36%  (100 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,450,737.64  ops/sec  ±0.76%  (102 runs)  -94.75%
███


✔  ramda             2,277,007.56  ops/sec  ±0.40%  (99 runs)   -95.12%
███


✔  rambda           30,961,928.87  ops/sec  ±0.29%  (98 runs)   -33.61%
███████████████████████████████████████████████


✔  lodash/fp           959,274.35  ops/sec  ±1.08%  (98 runs)   -97.94%
█


✔  native           14,208,220.97  ops/sec  ±0.24%  (96 runs)   -69.54%
█████████████████████
```

→ Fastest is **@mobily/ts-belt**

### filter

_filter (single function call)_

```bash
✔  @mobily/ts-belt  46,316,363.76  ops/sec  ±0.61%  (100 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,618,881.72  ops/sec  ±1.39%  (98 runs)   -94.35%
████


✔  ramda            16,289,543.05  ops/sec  ±0.91%  (99 runs)   -64.83%
████████████████████████


✔  rambda           46,294,664.30  ops/sec  ±0.98%  (97 runs)   -0.05%
██████████████████████████████████████████████████████████████████████


✔  lodash/fp        12,063,271.29  ops/sec  ±0.66%  (101 runs)  -73.95%
██████████████████


✔  native           14,866,989.31  ops/sec  ±0.81%  (97 runs)   -67.90%
██████████████████████
```

→ Fastest is **@mobily/ts-belt,rambda**

_filter (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  33,657,436.55  ops/sec  ±0.88%  (99 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,399,251.91  ops/sec  ±0.78%  (98 runs)   -92.87%
█████


✔  ramda             2,217,420.82  ops/sec  ±0.41%  (102 runs)  -93.41%
████


✔  rambda           23,919,765.91  ops/sec  ±0.76%  (99 runs)   -28.93%
██████████████████████████████████████████████████


✔  lodash/fp           913,064.31  ops/sec  ±1.06%  (100 runs)  -97.29%
█


✔  native           12,753,442.32  ops/sec  ±0.58%  (102 runs)  -62.11%
██████████████████████████
```

→ Fastest is **@mobily/ts-belt**

### find

_find (single function call)_

```bash
✔  @mobily/ts-belt  143,254,020.38  ops/sec  ±1.26%  (97 runs)   -6.20%
███████████████████████████████████████████████████████████████████


✔  remeda             3,507,780.60  ops/sec  ±0.53%  (100 runs)  -97.70%
█


✔  ramda             29,067,498.15  ops/sec  ±0.47%  (97 runs)   -80.97%
█████████████


✔  rambda           152,720,879.10  ops/sec  ±0.05%  (98 runs)   fastest
████████████████████████████████████████████████████████████████████████


✔  lodash/fp         13,167,059.58  ops/sec  ±0.74%  (101 runs)  -91.38%
██████


✔  native            29,271,778.05  ops/sec  ±0.04%  (102 runs)  -80.83%
█████████████
```

→ Fastest is **rambda**

_find (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  74,456,364.16  ops/sec  ±0.59%  (95 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,748,846.18  ops/sec  ±0.84%  (98 runs)   -96.31%
██


✔  ramda             2,318,274.40  ops/sec  ±0.40%  (102 runs)  -96.89%
██


✔  rambda           37,339,327.70  ops/sec  ±0.17%  (102 runs)  -49.85%
███████████████████████████████████


✔  lodash/fp           932,077.03  ops/sec  ±1.11%  (100 runs)  -98.75%



✔  native           22,944,648.91  ops/sec  ±0.22%  (102 runs)  -69.18%
█████████████████████
```

→ Fastest is **@mobily/ts-belt**

### splitEvery

_splitEvery/chunk (single function call)_

```bash
✔  @mobily/ts-belt  25,568,140.98  ops/sec  ±0.27%  (98 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,821,425.91  ops/sec  ±1.76%  (96 runs)   -88.97%
███████


✔  ramda             9,820,166.03  ops/sec  ±1.40%  (89 runs)   -61.59%
███████████████████████████


✔  rambda           14,931,683.13  ops/sec  ±0.24%  (101 runs)  -41.60%
█████████████████████████████████████████


✔  lodash/fp        11,277,447.38  ops/sec  ±0.85%  (100 runs)  -55.89%
███████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

_splitEvery/chunk (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  19,952,479.61  ops/sec  ±1.26%  (98 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            3,532,562.80  ops/sec  ±1.22%  (97 runs)   -82.30%
████████████


✔  ramda             1,764,049.46  ops/sec  ±0.47%  (99 runs)   -91.16%
██████


✔  rambda           10,901,998.96  ops/sec  ±0.90%  (102 runs)  -45.36%
██████████████████████████████████████


✔  lodash/fp           994,866.04  ops/sec  ±1.15%  (98 runs)   -95.01%
███
```

→ Fastest is **@mobily/ts-belt**
