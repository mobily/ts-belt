---
id: macbook-air-2020
title: MacBook Air (M1, 2020)
---

| Processor | Memory | Node | Author |
|-----------|--------|------|-------|
| Apple M1 | 16 GB LPDDR4| - | [@Pyrolistical](https://github.com/Pyrolistical) |

### map-filter-reduce

_map → filter → reduce_

```bash
✔  @mobily/ts-belt  253,015.07  ops/sec  ±0.13%  (101 runs)  fastest
████████████████████████████████████████████████████████████████████


✔  remeda            24,899.43  ops/sec  ±1.76%  (92 runs)   -90.16%
██████


✔  ramda            132,068.52  ops/sec  ±0.27%  (98 runs)   -47.80%
███████████████████████████████████


✔  rambda           248,194.72  ops/sec  ±0.32%  (100 runs)  -1.91%
██████████████████████████████████████████████████████████████████


✔  lodash/fp        100,740.71  ops/sec  ±0.62%  (99 runs)   -60.18%
███████████████████████████
```

→ Fastest is **@mobily/ts-belt**

### deepFlat-uniq-groupBy

_deepFlat → uniq → groupBy_

```bash
✔  @mobily/ts-belt  2,174,639.23  ops/sec  ±0.17%  (97 runs)  fastest
█████████████████████████████████████████████████████████████████████


✔  remeda             486,149.07  ops/sec  ±2.13%  (92 runs)  -77.64%
███████████████


✔  ramda              272,416.00  ops/sec  ±0.81%  (97 runs)  -87.47%
████████


✔  rambda           1,720,421.23  ops/sec  ±0.97%  (99 runs)  -20.89%
██████████████████████████████████████████████████████


✔  lodash/fp          521,541.80  ops/sec  ±1.04%  (99 runs)  -76.02%
████████████████
```

→ Fastest is **@mobily/ts-belt**

### sort

_sort (single function call)_

```bash
✔  @mobily/ts-belt  5,080,667.66  ops/sec  ±0.13%  (101 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda           1,477,420.40  ops/sec  ±0.70%  (97 runs)   -70.92%
████████████████████


✔  ramda            2,545,677.88  ops/sec  ±0.42%  (95 runs)   -49.89%
███████████████████████████████████


✔  rambda           2,655,773.49  ops/sec  ±0.44%  (97 runs)   -47.73%
████████████████████████████████████


✔  lodash/fp        1,662,303.07  ops/sec  ±1.70%  (98 runs)   -67.28%
██████████████████████
```

→ Fastest is **@mobily/ts-belt**

_sort (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  6,144,280.51  ops/sec  ±0.39%  (98 runs)  fastest
█████████████████████████████████████████████████████████████████████


✔  remeda           1,427,116.85  ops/sec  ±0.43%  (97 runs)  -76.77%
████████████████


✔  ramda            1,215,051.89  ops/sec  ±0.32%  (98 runs)  -80.22%
█████████████


✔  rambda           2,430,017.40  ops/sec  ±0.39%  (96 runs)  -60.45%
███████████████████████████


✔  lodash/fp          674,113.24  ops/sec  ±1.22%  (99 runs)  -89.03%
███████
```

→ Fastest is **@mobily/ts-belt**

### unzip

_unzip (single function call)_

```bash
✔  @mobily/ts-belt  47,149,499.01  ops/sec  ±0.47%  (98 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  lodash/fp         2,169,183.36  ops/sec  ±1.07%  (97 runs)  -95.40%
███
```

→ Fastest is **@mobily/ts-belt**

_unzip (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  34,597,589.09  ops/sec  ±0.90%  (92 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  lodash/fp         1,889,174.69  ops/sec  ±0.54%  (102 runs)  -94.54%
███
```

→ Fastest is **@mobily/ts-belt**

### flat

_flat (single function call)_

```bash
✔  @mobily/ts-belt  30,048,123.41  ops/sec  ±0.14%  (98 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            3,186,125.82  ops/sec  ±1.29%  (99 runs)   -89.40%
███████


✔  ramda             1,759,186.55  ops/sec  ±0.44%  (90 runs)   -94.15%
████


✔  rambda           14,730,943.29  ops/sec  ±0.89%  (101 runs)  -50.98%
██████████████████████████████████


✔  lodash/fp        15,327,614.39  ops/sec  ±0.60%  (99 runs)   -48.99%
████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

_flat (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  28,363,079.51  ops/sec  ±1.09%  (101 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,605,799.68  ops/sec  ±1.01%  (98 runs)   -90.81%
██████


✔  ramda             1,076,812.63  ops/sec  ±0.39%  (100 runs)  -96.20%
██


✔  rambda           11,854,998.18  ops/sec  ±0.55%  (93 runs)   -58.20%
█████████████████████████████


✔  lodash/fp         6,921,800.25  ops/sec  ±0.73%  (100 runs)  -75.60%
█████████████████
```

→ Fastest is **@mobily/ts-belt**

### dropWhile

_dropWhile (single function call)_

```bash
✔  @mobily/ts-belt  43,190,837.95  ops/sec  ±0.52%  (99 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  ramda            15,360,301.70  ops/sec  ±0.07%  (100 runs)  -64.44%
█████████████████████████


✔  rambda           39,665,230.46  ops/sec  ±0.90%  (101 runs)  -8.16%
█████████████████████████████████████████████████████████████████


✔  lodash/fp        12,882,336.99  ops/sec  ±0.57%  (98 runs)   -70.17%
█████████████████████
```

→ Fastest is **@mobily/ts-belt**

_dropWhile (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  32,230,292.28  ops/sec  ±0.98%  (98 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  ramda             2,075,321.04  ops/sec  ±0.43%  (101 runs)  -93.56%
████


✔  rambda           22,815,710.24  ops/sec  ±0.72%  (101 runs)  -29.21%
██████████████████████████████████████████████████


✔  lodash/fp         1,011,335.56  ops/sec  ±1.15%  (98 runs)   -96.86%
██
```

→ Fastest is **@mobily/ts-belt**

### takeWhile

_takeWhile (single function call)_

```bash
✔  @mobily/ts-belt  50,655,245.05  ops/sec  ±0.59%  (98 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            3,416,081.74  ops/sec  ±0.80%  (100 runs)  -93.26%
████


✔  ramda            15,698,941.44  ops/sec  ±0.35%  (97 runs)   -69.01%
██████████████████████


✔  rambda           45,744,193.67  ops/sec  ±1.59%  (86 runs)   -9.70%
████████████████████████████████████████████████████████████████


✔  lodash/fp        15,467,732.01  ops/sec  ±0.60%  (99 runs)   -69.46%
█████████████████████
```

→ Fastest is **@mobily/ts-belt**

_takeWhile (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  33,088,744.82  ops/sec  ±1.18%  (99 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            3,326,597.21  ops/sec  ±0.63%  (99 runs)   -89.95%
███████


✔  ramda             2,070,957.24  ops/sec  ±0.38%  (101 runs)  -93.74%
████


✔  rambda           23,425,805.92  ops/sec  ±0.66%  (100 runs)  -29.20%
██████████████████████████████████████████████████


✔  lodash/fp           974,466.08  ops/sec  ±1.10%  (97 runs)   -97.05%
██
```

→ Fastest is **@mobily/ts-belt**

### deepFlat

_deepFlat (single function call)_

```bash
✔  @mobily/ts-belt  16,942,528.49  ops/sec  ±0.29%  (101 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            1,456,463.42  ops/sec  ±1.58%  (95 runs)   -91.40%
██████


✔  ramda               715,355.47  ops/sec  ±0.52%  (95 runs)   -95.78%
██


✔  rambda           14,685,518.37  ops/sec  ±0.64%  (97 runs)   -13.32%
█████████████████████████████████████████████████████████████


✔  lodash/fp         7,796,746.70  ops/sec  ±0.51%  (99 runs)   -53.98%
████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

_deepFlat (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  16,685,984.58  ops/sec  ±0.59%  (98 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            1,244,007.06  ops/sec  ±0.89%  (101 runs)  -92.54%
█████


✔  ramda               556,882.70  ops/sec  ±0.37%  (99 runs)   -96.66%
██


✔  rambda           11,808,643.81  ops/sec  ±0.52%  (100 runs)  -29.23%
██████████████████████████████████████████████████


✔  lodash/fp         4,439,186.48  ops/sec  ±0.63%  (100 runs)  -73.40%
██████████████████
```

→ Fastest is **@mobily/ts-belt**

### reduce

_reduce (single function call)_

```bash
✔  @mobily/ts-belt  42,716,997.77  ops/sec  ±0.10%  (100 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,703,689.59  ops/sec  ±0.82%  (100 runs)  -93.67%
████


✔  ramda             9,894,867.92  ops/sec  ±0.57%  (95 runs)   -76.84%
████████████████


✔  rambda           15,082,676.84  ops/sec  ±1.60%  (94 runs)   -64.69%
█████████████████████████


✔  lodash/fp        10,992,233.29  ops/sec  ±1.02%  (96 runs)   -74.27%
██████████████████
```

→ Fastest is **@mobily/ts-belt**

_reduce (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  27,143,457.01  ops/sec  ±1.26%  (97 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,613,754.68  ops/sec  ±0.75%  (96 runs)   -90.37%
██████


✔  ramda             1,829,201.85  ops/sec  ±0.40%  (100 runs)  -93.26%
████


✔  rambda            7,410,552.58  ops/sec  ±0.87%  (96 runs)   -72.70%
███████████████████


✔  lodash/fp           987,265.44  ops/sec  ±1.20%  (96 runs)   -96.36%
██
```

→ Fastest is **@mobily/ts-belt**

### reject

_reject (single function call)_

```bash
✔  @mobily/ts-belt  41,009,246.40  ops/sec  ±0.29%  (98 runs)   -1.49%
█████████████████████████████████████████████████████████████████████


✔  remeda            2,700,217.44  ops/sec  ±1.01%  (99 runs)   -93.51%
████


✔  ramda            15,250,380.36  ops/sec  ±1.13%  (93 runs)   -63.36%
██████████████████████████


✔  rambda           41,627,594.49  ops/sec  ±1.13%  (92 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  lodash/fp         7,216,682.10  ops/sec  ±0.54%  (102 runs)  -82.66%
████████████
```

→ Fastest is **rambda**

_reject (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  28,298,003.77  ops/sec  ±1.07%  (100 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,406,172.99  ops/sec  ±0.74%  (100 runs)  -91.50%
██████


✔  ramda             2,113,580.69  ops/sec  ±0.43%  (102 runs)  -92.53%
█████


✔  rambda           21,062,812.44  ops/sec  ±0.71%  (95 runs)   -25.57%
████████████████████████████████████████████████████


✔  lodash/fp           925,681.89  ops/sec  ±1.11%  (98 runs)   -96.73%
██
```

→ Fastest is **@mobily/ts-belt**

### intersperse

_intersperse (single function call)_

```bash
✔  @mobily/ts-belt  39,921,605.27  ops/sec  ±0.25%  (99 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  ramda            38,899,248.45  ops/sec  ±0.41%  (97 runs)  -2.56%
████████████████████████████████████████████████████████████████████


✔  rambda           39,271,061.99  ops/sec  ±1.08%  (95 runs)  -1.63%
████████████████████████████████████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

_intersperse (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  27,418,220.20  ops/sec  ±0.84%  (98 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  ramda             2,368,256.79  ops/sec  ±0.45%  (101 runs)  -91.36%
██████


✔  rambda           20,644,257.10  ops/sec  ±0.81%  (91 runs)   -24.71%
█████████████████████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

### fromPairs

_fromPairs (single function call)_

```bash
✔  @mobily/ts-belt  19,207,951.95  ops/sec  ±0.08%  (99 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda           17,549,186.96  ops/sec  ±1.47%  (97 runs)   -8.64%
████████████████████████████████████████████████████████████████


✔  ramda             8,518,323.91  ops/sec  ±0.98%  (94 runs)   -55.65%
███████████████████████████████


✔  rambda           16,894,519.00  ops/sec  ±1.87%  (97 runs)   -12.04%
██████████████████████████████████████████████████████████████


✔  lodash/fp        13,936,084.26  ops/sec  ±0.39%  (100 runs)  -27.45%
███████████████████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

_fromPairs (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  18,578,985.86  ops/sec  ±1.54%  (95 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda           12,684,704.49  ops/sec  ±1.20%  (97 runs)   -31.73%
████████████████████████████████████████████████


✔  ramda             2,295,877.38  ops/sec  ±0.53%  (101 runs)  -87.64%
████████


✔  rambda           12,979,719.29  ops/sec  ±1.71%  (99 runs)   -30.14%
█████████████████████████████████████████████████


✔  lodash/fp         2,818,430.21  ops/sec  ±0.33%  (95 runs)   -84.83%
██████████
```

→ Fastest is **@mobily/ts-belt**

### groupBy

_groupBy (single function call)_

```bash
✔  @mobily/ts-belt  6,152,928.65  ops/sec  ±0.12%  (102 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda           1,760,090.11  ops/sec  ±1.50%  (99 runs)   -71.39%
████████████████████


✔  ramda            1,538,355.36  ops/sec  ±1.13%  (94 runs)   -75.00%
█████████████████


✔  rambda           5,938,764.00  ops/sec  ±1.05%  (94 runs)   -3.48%
███████████████████████████████████████████████████████████████████


✔  lodash/fp        3,190,616.55  ops/sec  ±1.04%  (98 runs)   -48.14%
████████████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

_groupBy (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  5,513,283.26  ops/sec  ±0.86%  (100 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda           1,706,130.51  ops/sec  ±1.22%  (100 runs)  -69.05%
█████████████████████


✔  ramda              931,357.95  ops/sec  ±0.63%  (99 runs)   -83.11%
███████████


✔  rambda           4,940,331.60  ops/sec  ±0.95%  (98 runs)   -10.39%
██████████████████████████████████████████████████████████████


✔  lodash/fp          826,349.00  ops/sec  ±1.08%  (100 runs)  -85.01%
██████████
```

→ Fastest is **@mobily/ts-belt**

### zip

_zip (single function call)_

```bash
✔  @mobily/ts-belt  24,140,079.33  ops/sec  ±0.13%  (97 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda            2,981,488.52  ops/sec  ±1.89%  (98 runs)  -87.65%
████████


✔  ramda            20,057,717.97  ops/sec  ±2.34%  (92 runs)  -16.91%
██████████████████████████████████████████████████████████


✔  rambda           21,187,737.94  ops/sec  ±1.62%  (99 runs)  -12.23%
█████████████████████████████████████████████████████████████


✔  lodash/fp         5,868,498.01  ops/sec  ±1.18%  (95 runs)  -75.69%
█████████████████
```

→ Fastest is **@mobily/ts-belt**

_zip (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  16,076,257.38  ops/sec  ±2.00%  (97 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda            2,973,309.21  ops/sec  ±0.94%  (98 runs)  -81.50%
████████████


✔  ramda             2,224,408.58  ops/sec  ±0.76%  (99 runs)  -86.16%
█████████


✔  rambda           12,785,386.91  ops/sec  ±1.42%  (97 runs)  -20.47%
███████████████████████████████████████████████████████


✔  lodash/fp         1,014,434.18  ops/sec  ±1.13%  (98 runs)  -93.69%
████
```

→ Fastest is **@mobily/ts-belt**

### forEach

_forEach (single function call)_

```bash
✔  @mobily/ts-belt  150,547,198.75  ops/sec  ±1.28%  (99 runs)   -1.31%
███████████████████████████████████████████████████████████████████████


✔  remeda             3,137,342.49  ops/sec  ±0.52%  (98 runs)   -97.94%
█


✔  ramda            147,170,193.31  ops/sec  ±1.27%  (98 runs)   -3.52%
█████████████████████████████████████████████████████████████████████


✔  rambda           152,539,057.68  ops/sec  ±0.05%  (101 runs)  fastest
████████████████████████████████████████████████████████████████████████


✔  lodash/fp         16,256,711.14  ops/sec  ±0.60%  (100 runs)  -89.34%
███████
```

→ Fastest is **rambda**

_forEach (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  78,339,424.42  ops/sec  ±0.40%  (93 runs)  fastest
██████████████████████████████████████████████████████████████████████


✔  remeda            2,443,210.41  ops/sec  ±0.81%  (97 runs)  -96.88%
██


✔  ramda             2,513,295.76  ops/sec  ±0.41%  (98 runs)  -96.79%
██


✔  rambda           37,661,138.13  ops/sec  ±0.21%  (94 runs)  -51.93%
█████████████████████████████████


✔  lodash/fp         1,040,893.87  ops/sec  ±1.17%  (98 runs)  -98.67%
```

→ Fastest is **@mobily/ts-belt**

### uniq

_uniq (single function call)_

```bash
✔  @mobily/ts-belt  17,641,706.77  ops/sec  ±0.35%  (97 runs)   -24.47%
█████████████████████████████████████████████████████


✔  remeda            2,129,074.38  ops/sec  ±1.46%  (96 runs)   -90.88%
██████


✔  ramda               972,077.08  ops/sec  ±0.54%  (96 runs)   -95.84%
██


✔  rambda            4,459,498.40  ops/sec  ±0.64%  (100 runs)  -80.91%
█████████████


✔  lodash/fp        23,357,138.69  ops/sec  ±0.79%  (98 runs)   fastest
███████████████████████████████████████████████████████████████████████
```

→ Fastest is **lodash/fp**

_uniq (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  16,992,514.10  ops/sec  ±0.75%  (97 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,214,966.42  ops/sec  ±0.77%  (100 runs)  -86.97%
█████████


✔  ramda               711,203.05  ops/sec  ±0.34%  (101 runs)  -95.81%
██


✔  rambda            3,706,475.58  ops/sec  ±0.57%  (98 runs)   -78.19%
███████████████


✔  lodash/fp         7,558,579.54  ops/sec  ±0.76%  (99 runs)   -55.52%
███████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

### toPairs

_toPairs (single function call)_

```bash
✔  @mobily/ts-belt  37,693,044.18  ops/sec  ±1.69%  (96 runs)   -1.20%
██████████████████████████████████████████████████████████████████████


✔  remeda           33,012,494.15  ops/sec  ±4.04%  (86 runs)   -13.47%
█████████████████████████████████████████████████████████████


✔  ramda            10,318,155.96  ops/sec  ±1.13%  (92 runs)   -72.95%
███████████████████


✔  rambda           38,149,375.69  ops/sec  ±2.28%  (94 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  lodash/fp        14,742,104.68  ops/sec  ±1.11%  (101 runs)  -61.36%
███████████████████████████
```

→ Fastest is **rambda**

_toPairs (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  37,274,229.29  ops/sec  ±1.99%  (99 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda           21,813,006.90  ops/sec  ±1.34%  (98 runs)   -41.48%
█████████████████████████████████████████


✔  ramda             2,424,121.78  ops/sec  ±0.53%  (101 runs)  -93.50%
████


✔  rambda           22,994,904.44  ops/sec  ±1.24%  (98 runs)   -38.31%
███████████████████████████████████████████


✔  lodash/fp         5,920,759.20  ops/sec  ±0.92%  (101 runs)  -84.12%
███████████
```

→ Fastest is **@mobily/ts-belt**

### map

_map (single function call)_

```bash
✔  @mobily/ts-belt  79,772,084.87  ops/sec  ±0.53%  (101 runs)  -0.69%
██████████████████████████████████████████████████████████████████████


✔  remeda            3,036,516.75  ops/sec  ±1.33%  (96 runs)   -96.22%
██


✔  ramda            20,055,982.10  ops/sec  ±0.71%  (97 runs)   -75.03%
█████████████████


✔  rambda           80,325,131.41  ops/sec  ±0.72%  (98 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  lodash/fp        13,945,408.07  ops/sec  ±0.53%  (101 runs)  -82.64%
████████████
```

→ Fastest is **rambda**

_map (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  46,597,014.00  ops/sec  ±0.37%  (99 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,443,422.14  ops/sec  ±0.81%  (96 runs)   -94.76%
███


✔  funkia/list       3,011,025.40  ops/sec  ±0.40%  (102 runs)  -93.54%
████


✔  ramda             2,263,903.58  ops/sec  ±0.27%  (99 runs)   -95.14%
███


✔  rambda           30,962,126.26  ops/sec  ±0.29%  (98 runs)   -33.55%
███████████████████████████████████████████████


✔  lodash/fp           931,926.61  ops/sec  ±0.40%  (99 runs)   -98.00%
█
```

→ Fastest is **@mobily/ts-belt**

### filter

_filter (single function call)_

```bash
✔  @mobily/ts-belt  45,806,231.15  ops/sec  ±1.41%  (98 runs)   -0.53%
██████████████████████████████████████████████████████████████████████


✔  remeda            2,608,473.96  ops/sec  ±1.38%  (97 runs)   -94.34%
████


✔  ramda            16,361,819.38  ops/sec  ±0.90%  (95 runs)   -64.47%
█████████████████████████


✔  rambda           46,049,512.96  ops/sec  ±1.09%  (99 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  lodash/fp        11,871,859.10  ops/sec  ±0.94%  (101 runs)  -74.22%
██████████████████
```

→ Fastest is **rambda**

_filter (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  34,068,432.10  ops/sec  ±0.88%  (99 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,391,554.16  ops/sec  ±0.75%  (99 runs)   -92.98%
████


✔  ramda             2,218,395.06  ops/sec  ±0.42%  (101 runs)  -93.49%
████


✔  rambda           23,791,914.86  ops/sec  ±0.76%  (100 runs)  -30.16%
█████████████████████████████████████████████████


✔  lodash/fp           917,823.04  ops/sec  ±1.10%  (99 runs)   -97.31%
█
```

→ Fastest is **@mobily/ts-belt**

### find

_find (single function call)_

```bash
✔  @mobily/ts-belt  143,280,559.24  ops/sec  ±1.08%  (94 runs)  -6.07%
██████████████████████████████████████████████████████████████████


✔  remeda             3,511,868.09  ops/sec  ±0.50%  (94 runs)  -97.70%
█


✔  ramda             29,106,857.16  ops/sec  ±0.50%  (98 runs)  -80.92%
█████████████


✔  rambda           152,540,184.75  ops/sec  ±0.10%  (98 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  lodash/fp         12,872,946.25  ops/sec  ±0.71%  (99 runs)  -91.56%
█████
```

→ Fastest is **rambda**

_find (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  74,616,357.31  ops/sec  ±0.52%  (95 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,761,036.24  ops/sec  ±0.86%  (95 runs)   -96.30%
██


✔  ramda             2,320,651.93  ops/sec  ±0.43%  (100 runs)  -96.89%
██


✔  rambda           37,220,808.88  ops/sec  ±0.31%  (97 runs)   -50.12%
███████████████████████████████████


✔  lodash/fp           926,823.53  ops/sec  ±1.12%  (98 runs)   -98.76%
```

→ Fastest is **@mobily/ts-belt**

### splitEvery

_splitEvery/chunk (single function call)_

```bash
✔  @mobily/ts-belt  25,595,293.78  ops/sec  ±0.13%  (100 runs)  fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            2,804,633.69  ops/sec  ±1.69%  (97 runs)   -89.04%
███████


✔  ramda             9,810,745.17  ops/sec  ±1.41%  (88 runs)   -61.67%
███████████████████████████


✔  rambda           14,816,564.61  ops/sec  ±0.99%  (101 runs)  -42.11%
█████████████████████████████████████████


✔  lodash/fp        10,563,677.38  ops/sec  ±0.79%  (100 runs)  -58.73%
█████████████████████████████
```

→ Fastest is **@mobily/ts-belt**

_splitEvery/chunk (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  19,938,146.52  ops/sec  ±1.19%  (97 runs)   fastest
███████████████████████████████████████████████████████████████████████


✔  remeda            3,513,248.34  ops/sec  ±1.20%  (99 runs)   -82.38%
████████████


✔  ramda             1,753,797.61  ops/sec  ±0.47%  (100 runs)  -91.20%
██████


✔  rambda           10,832,290.41  ops/sec  ±0.89%  (102 runs)  -45.67%
██████████████████████████████████████


✔  lodash/fp           992,438.53  ops/sec  ±0.32%  (99 runs)   -95.02%
███
```

→ Fastest is **@mobily/ts-belt**
