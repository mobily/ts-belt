---
id: macbook-pro-2017
title: MacBook Pro (2017)
---

| Processor | Memory | Node | Author |
|-----------|--------|------|-------|
| 2,9 GHz Quad-Core Intel Core i7 | 16 GB 2133 MHz LPDDR3 | v16.10.0 | [@mobily](https://github.com/mobily) |

### map-filter-reduce

_map → filter → reduce_

```bash
✔  @mobily/ts-belt  174,586.96  ops/sec  ±1.99%  (93 runs)  fastest
✔  remeda            13,116.12  ops/sec  ±3.90%  (87 runs)  -92.49%
✔  ramda             71,726.53  ops/sec  ±2.74%  (91 runs)  -58.92%
✔  rambda           155,236.83  ops/sec  ±2.77%  (89 runs)  -11.08%
✔  lodash/fp         52,088.08  ops/sec  ±2.34%  (92 runs)  -70.16%
```

→ Fastest is **@mobily/ts-belt**

### deepFlat-uniq-groupBy

_deepFlat → uniq → groupBy_

```bash
✔  @mobily/ts-belt  1,057,091.24  ops/sec  ±1.83%  (90 runs)  fastest
✔  remeda             212,327.21  ops/sec  ±3.93%  (89 runs)  -79.91%
✔  ramda              120,122.01  ops/sec  ±3.83%  (86 runs)  -88.64%
✔  rambda             806,321.94  ops/sec  ±2.21%  (95 runs)  -23.72%
✔  lodash/fp          196,049.03  ops/sec  ±2.59%  (91 runs)  -81.45%
```

→ Fastest is **@mobily/ts-belt**

### sort

_sort (single function call)_

```bash
✔  @mobily/ts-belt  2,342,902.79  ops/sec  ±2.94%  (92 runs)  fastest
✔  remeda             680,628.60  ops/sec  ±2.38%  (91 runs)  -70.95%
✔  ramda            1,453,866.82  ops/sec  ±1.04%  (91 runs)  -37.95%
✔  rambda           1,558,904.88  ops/sec  ±1.48%  (94 runs)  -33.46%
✔  lodash/fp          740,105.75  ops/sec  ±3.53%  (92 runs)  -68.41%
```

→ Fastest is **@mobily/ts-belt**

_sort (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  2,727,776.33  ops/sec  ±2.14%  (93 runs)  fastest
✔  remeda             624,808.97  ops/sec  ±2.26%  (88 runs)  -77.09%
✔  ramda              565,664.01  ops/sec  ±2.86%  (92 runs)  -79.26%
✔  rambda           1,350,736.41  ops/sec  ±2.12%  (88 runs)  -50.48%
✔  lodash/fp          275,162.63  ops/sec  ±2.19%  (92 runs)  -89.91%
```

→ Fastest is **@mobily/ts-belt**

### unzip

_unzip (single function call)_

```bash
✔  @mobily/ts-belt  24,515,360.07  ops/sec  ±2.01%  (89 runs)  fastest
✔  lodash/fp         1,045,603.53  ops/sec  ±2.83%  (91 runs)  -95.73%
```

→ Fastest is **@mobily/ts-belt**

_unzip (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  16,856,001.30  ops/sec  ±3.69%  (85 runs)  fastest
✔  lodash/fp           906,383.46  ops/sec  ±2.08%  (94 runs)  -94.62%
```

→ Fastest is **@mobily/ts-belt**

### flat

_flat (single function call)_

```bash
✔  @mobily/ts-belt  16,342,074.09  ops/sec  ±1.41%  (92 runs)  fastest
✔  remeda            1,359,050.04  ops/sec  ±3.12%  (87 runs)  -91.68%
✔  ramda               760,381.12  ops/sec  ±2.94%  (90 runs)  -95.35%
✔  rambda            9,121,410.45  ops/sec  ±2.52%  (88 runs)  -44.18%
✔  lodash/fp         8,235,742.34  ops/sec  ±3.05%  (91 runs)  -49.60%
```

→ Fastest is **@mobily/ts-belt**

_flat (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  15,071,875.84  ops/sec  ±3.01%  (90 runs)  fastest
✔  remeda            1,284,643.23  ops/sec  ±2.33%  (95 runs)  -91.48%
✔  ramda               487,212.19  ops/sec  ±2.52%  (94 runs)  -96.77%
✔  rambda            7,077,146.00  ops/sec  ±2.05%  (94 runs)  -53.04%
✔  lodash/fp         3,427,124.37  ops/sec  ±3.43%  (93 runs)  -77.26%
```

→ Fastest is **@mobily/ts-belt**

### dropWhile

_dropWhile (single function call)_

```bash
✔  @mobily/ts-belt  27,046,697.47  ops/sec  ±1.48%  (94 runs)  fastest
✔  ramda             6,623,416.41  ops/sec  ±3.44%  (88 runs)  -75.51%
✔  rambda           21,227,701.20  ops/sec  ±2.98%  (85 runs)  -21.51%
✔  lodash/fp         5,921,925.06  ops/sec  ±3.39%  (89 runs)  -78.10%
```

→ Fastest is **@mobily/ts-belt**

_dropWhile (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  15,491,136.46  ops/sec  ±2.28%  (90 runs)  fastest
✔  ramda               897,477.91  ops/sec  ±2.90%  (92 runs)  -94.21%
✔  rambda           11,173,950.93  ops/sec  ±3.25%  (92 runs)  -27.87%
✔  lodash/fp           367,837.66  ops/sec  ±2.45%  (95 runs)  -97.63%
```

→ Fastest is **@mobily/ts-belt**

### takeWhile

_takeWhile (single function call)_

```bash
✔  @mobily/ts-belt  29,379,123.09  ops/sec  ±2.64%  (90 runs)  fastest
✔  remeda            1,469,587.22  ops/sec  ±2.37%  (91 runs)  -95.00%
✔  ramda             7,174,944.94  ops/sec  ±3.41%  (89 runs)  -75.58%
✔  rambda           22,897,148.06  ops/sec  ±3.09%  (87 runs)  -22.06%
✔  lodash/fp         6,773,965.51  ops/sec  ±1.54%  (96 runs)  -76.94%
```

→ Fastest is **@mobily/ts-belt**

_takeWhile (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  16,628,531.12  ops/sec  ±2.42%  (88 runs)  fastest
✔  remeda            1,371,794.70  ops/sec  ±2.96%  (91 runs)  -91.75%
✔  ramda               873,263.60  ops/sec  ±2.89%  (93 runs)  -94.75%
✔  rambda           10,990,444.17  ops/sec  ±2.80%  (93 runs)  -33.91%
✔  lodash/fp           302,103.02  ops/sec  ±4.23%  (86 runs)  -98.18%
```

→ Fastest is **@mobily/ts-belt**

### deepFlat

_deepFlat (single function call)_

```bash
✔  @mobily/ts-belt  9,578,337.48  ops/sec  ±2.69%  (91 runs)  fastest
✔  remeda             591,977.18  ops/sec  ±4.01%  (88 runs)  -93.82%
✔  ramda              312,107.56  ops/sec  ±2.89%  (89 runs)  -96.74%
✔  rambda           9,192,197.77  ops/sec  ±2.25%  (90 runs)  -4.03%
✔  lodash/fp        3,880,407.90  ops/sec  ±2.74%  (92 runs)  -59.49%
```

→ Fastest is **@mobily/ts-belt**

_deepFlat (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  9,321,041.36  ops/sec  ±2.81%  (90 runs)  fastest
✔  remeda             526,670.26  ops/sec  ±3.16%  (91 runs)  -94.35%
✔  ramda              249,516.64  ops/sec  ±3.31%  (93 runs)  -97.32%
✔  rambda           7,040,220.02  ops/sec  ±2.79%  (92 runs)  -24.47%
✔  lodash/fp        2,344,753.07  ops/sec  ±3.01%  (88 runs)  -74.84%
```

→ Fastest is **@mobily/ts-belt**

### reduce

_reduce (single function call)_

```bash
✔  @mobily/ts-belt  24,136,722.97  ops/sec  ±4.39%  (86 runs)  fastest
✔  remeda            1,170,438.33  ops/sec  ±3.27%  (91 runs)  -95.15%
✔  ramda             4,243,390.23  ops/sec  ±3.28%  (86 runs)  -82.42%
✔  rambda            8,157,233.88  ops/sec  ±3.44%  (90 runs)  -66.20%
✔  lodash/fp         4,700,997.08  ops/sec  ±3.39%  (94 runs)  -80.52%
```

→ Fastest is **@mobily/ts-belt**

_reduce (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  15,071,997.41  ops/sec  ±3.12%  (90 runs)  fastest
✔  remeda            1,099,427.39  ops/sec  ±2.16%  (90 runs)  -92.71%
✔  ramda               802,059.71  ops/sec  ±2.63%  (92 runs)  -94.68%
✔  rambda            3,547,128.61  ops/sec  ±3.08%  (89 runs)  -76.47%
✔  lodash/fp           377,156.87  ops/sec  ±2.84%  (93 runs)  -97.50%
```

→ Fastest is **@mobily/ts-belt**

### reject

_reject (single function call)_

```bash
✔  @mobily/ts-belt  21,498,852.93  ops/sec  ±2.06%  (86 runs)  fastest
✔  remeda            1,154,208.37  ops/sec  ±3.17%  (90 runs)  -94.63%
✔  ramda             7,413,977.19  ops/sec  ±3.47%  (90 runs)  -65.51%
✔  rambda           19,983,445.66  ops/sec  ±3.42%  (87 runs)  -7.05%
✔  lodash/fp         3,623,279.75  ops/sec  ±2.23%  (93 runs)  -83.15%
```

→ Fastest is **@mobily/ts-belt**

_reject (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  13,132,207.54  ops/sec  ±3.08%  (88 runs)  fastest
✔  remeda            1,048,665.66  ops/sec  ±5.37%  (94 runs)  -92.01%
✔  ramda               879,398.52  ops/sec  ±4.22%  (92 runs)  -93.30%
✔  rambda           10,068,853.91  ops/sec  ±2.83%  (89 runs)  -23.33%
✔  lodash/fp           301,532.19  ops/sec  ±4.81%  (85 runs)  -97.70%
```

→ Fastest is **@mobily/ts-belt**

### intersperse

_intersperse (single function call)_

```bash
✔  @mobily/ts-belt  23,266,507.91  ops/sec  ±2.12%  (91 runs)  fastest
✔  ramda            23,093,193.78  ops/sec  ±3.37%  (92 runs)  -0.74%
✔  rambda           21,735,925.04  ops/sec  ±2.79%  (92 runs)  -6.58%
```

→ Fastest is **@mobily/ts-belt**

_intersperse (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  14,274,569.21  ops/sec  ±2.57%  (92 runs)  fastest
✔  ramda             1,007,510.98  ops/sec  ±2.87%  (92 runs)  -92.94%
✔  rambda           10,340,691.52  ops/sec  ±3.31%  (87 runs)  -27.56%
```

→ Fastest is **@mobily/ts-belt**

### fromPairs

_fromPairs (single function call)_

```bash
✔  @mobily/ts-belt  8,771,034.20  ops/sec  ±3.49%  (89 runs)  fastest
✔  remeda           7,792,905.88  ops/sec  ±3.89%  (89 runs)  -11.15%
✔  ramda            3,665,662.04  ops/sec  ±3.23%  (88 runs)  -58.21%
✔  rambda           7,467,129.26  ops/sec  ±3.76%  (90 runs)  -14.87%
✔  lodash/fp        6,167,886.12  ops/sec  ±3.34%  (94 runs)  -29.68%
```

→ Fastest is **@mobily/ts-belt**

_fromPairs (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  8,469,510.08  ops/sec  ±3.39%  (91 runs)  fastest
✔  remeda           5,630,118.71  ops/sec  ±4.63%  (89 runs)  -33.52%
✔  ramda              965,570.65  ops/sec  ±2.91%  (90 runs)  -88.60%
✔  rambda           5,710,875.53  ops/sec  ±4.33%  (90 runs)  -32.57%
✔  lodash/fp        1,196,520.53  ops/sec  ±3.27%  (89 runs)  -85.87%
```

→ Fastest is **@mobily/ts-belt**

### groupBy

_groupBy (single function call)_

```bash
✔  @mobily/ts-belt  2,713,069.26  ops/sec  ±3.37%  (89 runs)  fastest
✔  remeda             738,900.30  ops/sec  ±4.28%  (86 runs)  -72.77%
✔  ramda              639,761.90  ops/sec  ±3.34%  (93 runs)  -76.42%
✔  rambda           2,672,057.78  ops/sec  ±3.37%  (91 runs)  -1.51%
✔  lodash/fp        1,440,973.69  ops/sec  ±2.63%  (94 runs)  -46.89%
```

→ Fastest is **@mobily/ts-belt**

_groupBy (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  2,412,819.39  ops/sec  ±3.92%  (93 runs)  fastest
✔  remeda             679,154.63  ops/sec  ±3.24%  (91 runs)  -71.85%
✔  ramda              420,363.33  ops/sec  ±2.89%  (94 runs)  -82.58%
✔  rambda           2,141,147.95  ops/sec  ±3.81%  (91 runs)  -11.26%
✔  lodash/fp          300,628.50  ops/sec  ±3.63%  (93 runs)  -87.54%
```

→ Fastest is **@mobily/ts-belt**

### zip

_zip (single function call)_

```bash
✔  @mobily/ts-belt  10,703,016.96  ops/sec  ±3.50%  (89 runs)  fastest
✔  remeda            1,243,156.85  ops/sec  ±4.56%  (88 runs)  -88.38%
✔  ramda             8,104,619.22  ops/sec  ±4.11%  (85 runs)  -24.28%
✔  rambda            8,651,600.47  ops/sec  ±3.00%  (88 runs)  -19.17%
✔  lodash/fp         2,470,051.95  ops/sec  ±3.88%  (89 runs)  -76.92%
```

→ Fastest is **@mobily/ts-belt**

_zip (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  7,811,057.07  ops/sec  ±3.44%  (87 runs)  fastest
✔  remeda           1,243,509.19  ops/sec  ±3.98%  (91 runs)  -84.08%
✔  ramda              913,467.22  ops/sec  ±3.49%  (92 runs)  -88.31%
✔  rambda           5,680,893.36  ops/sec  ±3.88%  (88 runs)  -27.27%
✔  lodash/fp          396,866.17  ops/sec  ±3.50%  (93 runs)  -94.92%
```

→ Fastest is **@mobily/ts-belt**

### forEach

_forEach (single function call)_

```bash
✔  @mobily/ts-belt   98,619,793.23  ops/sec  ±0.82%  (93 runs)   -7.01%
✔  remeda             1,302,858.26  ops/sec  ±3.45%  (88 runs)  -98.77%
✔  ramda            106,052,003.63  ops/sec  ±1.47%  (90 runs)  fastest
✔  rambda            97,350,928.72  ops/sec  ±1.20%  (93 runs)   -8.20%
✔  lodash/fp          6,117,304.35  ops/sec  ±8.00%  (80 runs)  -94.23%
```

→ Fastest is **ramda**

_forEach (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  35,183,893.70  ops/sec  ±3.48%  (86 runs)  fastest
✔  remeda            1,155,933.08  ops/sec  ±2.59%  (92 runs)  -96.71%
✔  ramda             1,116,545.38  ops/sec  ±3.16%  (94 runs)  -96.83%
✔  rambda           17,569,426.79  ops/sec  ±4.06%  (88 runs)  -50.06%
✔  lodash/fp           377,910.60  ops/sec  ±4.11%  (90 runs)  -98.93%
```

→ Fastest is **@mobily/ts-belt**

### uniq

_uniq (single function call)_

```bash
✔  @mobily/ts-belt  10,576,220.11  ops/sec  ±1.83%  (93 runs)  -10.98%
✔  remeda              940,613.98  ops/sec  ±2.77%  (90 runs)  -92.08%
✔  ramda               463,401.23  ops/sec  ±2.00%  (88 runs)  -96.10%
✔  rambda            2,417,650.07  ops/sec  ±0.55%  (94 runs)  -79.65%
✔  lodash/fp        11,880,180.47  ops/sec  ±2.62%  (92 runs)  fastest
```

→ Fastest is **lodash/fp**

_uniq (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  9,837,425.02  ops/sec  ±3.83%  (81 runs)  fastest
✔  remeda           1,072,382.65  ops/sec  ±3.64%  (92 runs)  -89.10%
✔  ramda              351,172.93  ops/sec  ±4.29%  (89 runs)  -96.43%
✔  rambda           1,829,725.41  ops/sec  ±2.85%  (94 runs)  -81.40%
✔  lodash/fp        4,197,703.67  ops/sec  ±4.29%  (93 runs)  -57.33%
```

→ Fastest is **@mobily/ts-belt**

### toPairs

_toPairs (single function call)_

```bash
✔  @mobily/ts-belt  15,759,801.15  ops/sec  ±4.81%  (85 runs)  fastest
✔  remeda           14,281,044.65  ops/sec  ±6.23%  (78 runs)  -9.38%
✔  ramda             4,355,137.41  ops/sec  ±3.69%  (86 runs)  -72.37%
✔  rambda           15,631,702.94  ops/sec  ±4.61%  (85 runs)  -0.81%
✔  lodash/fp         6,709,574.96  ops/sec  ±3.56%  (91 runs)  -57.43%
```

→ Fastest is **@mobily/ts-belt**

_toPairs (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  15,882,321.16  ops/sec  ±3.86%   (85 runs)  fastest
✔  remeda            9,336,455.38  ops/sec  ±2.87%   (90 runs)  -41.21%
✔  ramda             1,028,707.89  ops/sec  ±2.58%   (91 runs)  -93.52%
✔  rambda            4,713,875.23  ops/sec  ±33.00%  (48 runs)  -70.32%
✔  lodash/fp         2,600,464.69  ops/sec  ±4.04%   (87 runs)  -83.63%
```

→ Fastest is **@mobily/ts-belt**

### map

_map (single function call)_

```bash
✔  @mobily/ts-belt  43,776,354.05  ops/sec  ±2.19%  (92 runs)  fastest
✔  remeda            1,301,203.71  ops/sec  ±2.74%  (88 runs)  -97.03%
✔  ramda             7,572,353.31  ops/sec  ±0.78%  (92 runs)  -82.70%
✔  rambda           42,277,297.61  ops/sec  ±1.57%  (90 runs)   -3.42%
✔  lodash/fp         6,086,942.45  ops/sec  ±2.11%  (89 runs)  -86.10%
```

→ Fastest is **@mobily/ts-belt**

_map (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  19,762,546.94  ops/sec  ±3.83%  (81 runs)  fastest
✔  remeda            1,005,068.46  ops/sec  ±3.98%  (86 runs)  -94.91%
✔  ramda               978,699.34  ops/sec  ±3.44%  (89 runs)  -95.05%
✔  rambda           14,017,929.31  ops/sec  ±3.67%  (89 runs)  -29.07%
✔  lodash/fp           332,616.19  ops/sec  ±4.28%  (92 runs)  -98.32%
```

→ Fastest is **@mobily/ts-belt**

### filter

_filter (single function call)_

```bash
✔  @mobily/ts-belt  24,270,004.22  ops/sec  ±4.26%  (83 runs)  -5.42%
✔  remeda            1,049,232.09  ops/sec  ±4.11%  (86 runs)  -95.91%
✔  ramda             7,907,139.30  ops/sec  ±4.49%  (86 runs)  -69.19%
✔  rambda           25,661,985.69  ops/sec  ±4.30%  (84 runs)  fastest
✔  lodash/fp         5,764,724.08  ops/sec  ±3.01%  (93 runs)  -77.54%
```

→ Fastest is **rambda**

_filter (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  15,266,034.26  ops/sec  ±4.39%  (85 runs)  fastest
✔  remeda              870,164.79  ops/sec  ±8.76%  (81 runs)  -94.30%
✔  ramda               848,166.22  ops/sec  ±4.56%  (82 runs)  -94.44%
✔  rambda           10,648,006.37  ops/sec  ±5.65%  (82 runs)  -30.25%
✔  lodash/fp           334,474.60  ops/sec  ±5.08%  (84 runs)  -97.81%
```

→ Fastest is **@mobily/ts-belt**

### find

_find (single function call)_

```bash
✔  @mobily/ts-belt   77,150,743.85  ops/sec  ±2.13%  (93 runs)  -25.93%
✔  remeda             1,317,002.32  ops/sec  ±4.09%  (82 runs)  -98.74%
✔  ramda             13,225,846.58  ops/sec  ±1.07%  (86 runs)  -87.30%
✔  rambda           104,160,290.82  ops/sec  ±0.33%  (96 runs)  fastest
✔  lodash/fp          5,498,068.11  ops/sec  ±0.68%  (95 runs)  -94.72%
```

→ Fastest is **rambda**

_find (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  29,992,903.02  ops/sec  ±4.23%  (83 runs)  fastest
✔  remeda            1,214,535.78  ops/sec  ±4.77%  (86 runs)  -95.95%
✔  ramda               993,708.95  ops/sec  ±4.09%  (90 runs)  -96.69%
✔  rambda           17,979,082.58  ops/sec  ±3.57%  (88 runs)  -40.06%
✔  lodash/fp           365,852.77  ops/sec  ±3.71%  (92 runs)  -98.78%
```

→ Fastest is **@mobily/ts-belt**

### splitEvery

_splitEvery/chunk (single function call)_

```bash
✔  @mobily/ts-belt  14,331,548.23  ops/sec  ±3.94%  (88 runs)  fastest
✔  remeda            1,091,974.62  ops/sec  ±5.53%  (77 runs)  -92.38%
✔  ramda             4,416,427.42  ops/sec  ±3.87%  (83 runs)  -69.18%
✔  rambda            6,982,444.17  ops/sec  ±4.18%  (85 runs)  -51.28%
✔  lodash/fp         4,752,714.16  ops/sec  ±3.67%  (93 runs)  -66.84%
```

→ Fastest is **@mobily/ts-belt**

_splitEvery/chunk (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  9,932,350.55  ops/sec  ±3.59%  (88 runs)  fastest
✔  remeda           1,430,077.84  ops/sec  ±4.68%  (86 runs)  -85.60%
✔  ramda              711,053.17  ops/sec  ±3.87%  (89 runs)  -92.84%
✔  rambda           4,806,374.37  ops/sec  ±3.76%  (81 runs)  -51.61%
✔  lodash/fp          333,983.34  ops/sec  ±4.29%  (88 runs)  -96.64%
```

→ Fastest is **@mobily/ts-belt**
