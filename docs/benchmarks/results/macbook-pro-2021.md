---
id: macbook-pro-2021
title: MacBook Pro (M1 Pro, 2021)
---

| Processor | Memory | Node | Author |
|-----------|--------|------|-------|
| Apple M1 Pro | 32 GB | v16.13.0 | [@Fortidude](https://github.com/Fortidude) |

### map-filter-reduce

_map → filter → reduce_

```bash
✔  @mobily/ts-belt  254,251.22  ops/sec  ±0.20%  (99 runs)   fastest
✔  remeda            25,231.20  ops/sec  ±1.76%  (92 runs)   -90.08%
✔  ramda            131,950.08  ops/sec  ±0.41%  (98 runs)   -48.10%
✔  rambda           250,385.53  ops/sec  ±0.39%  (102 runs)  -1.52%
✔  lodash/fp         66,034.82  ops/sec  ±0.71%  (98 runs)   -74.03%
```

→ Fastest is **@mobily/ts-belt**

### deepFlat-uniq-groupBy

_deepFlat → uniq → groupBy_

```bash
✔  @mobily/ts-belt  2,297,096.07  ops/sec  ±0.20%  (99 runs)  fastest
✔  remeda             494,070.92  ops/sec  ±2.33%  (98 runs)  -78.49%
✔  ramda              281,192.43  ops/sec  ±0.97%  (93 runs)  -87.76%
✔  rambda           1,767,868.03  ops/sec  ±1.10%  (98 runs)  -23.04%
✔  lodash/fp          528,949.75  ops/sec  ±1.15%  (98 runs)  -76.97%
```

→ Fastest is **@mobily/ts-belt**

### sort

_sort (single function call)_

```bash
✔  @mobily/ts-belt  5,221,617.21  ops/sec  ±0.18%  (101 runs)  fastest
✔  remeda           1,460,365.11  ops/sec  ±1.02%  (93 runs)   -72.03%
✔  ramda            2,630,505.55  ops/sec  ±0.61%  (89 runs)   -49.62%
✔  rambda           2,731,856.35  ops/sec  ±0.61%  (97 runs)   -47.68%
✔  lodash/fp        1,534,800.37  ops/sec  ±1.92%  (93 runs)   -70.61%
```

→ Fastest is **@mobily/ts-belt**

_sort (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  4,789,956.41  ops/sec  ±0.47%  (96 runs)   fastest
✔  remeda           1,462,282.61  ops/sec  ±0.48%  (100 runs)  -69.47%
✔  ramda            1,270,826.94  ops/sec  ±0.36%  (97 runs)   -73.47%
✔  rambda           2,553,764.07  ops/sec  ±0.60%  (97 runs)   -46.69%
✔  lodash/fp          677,163.74  ops/sec  ±1.35%  (101 runs)  -85.86%
```

→ Fastest is **@mobily/ts-belt**

### unzip

_unzip (single function call)_

```bash
✔  @mobily/ts-belt  49,515,854.12  ops/sec  ±0.30%  (97 runs)  fastest
✔  lodash/fp         2,186,127.29  ops/sec  ±1.08%  (99 runs)  -95.58%
```

→ Fastest is **@mobily/ts-belt**

_unzip (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  35,937,901.76  ops/sec  ±0.90%  (94 runs)  fastest
✔  lodash/fp         1,880,948.20  ops/sec  ±0.59%  (96 runs)  -94.77%
```

→ Fastest is **@mobily/ts-belt**

### flat

_flat (single function call)_

```bash
✔  @mobily/ts-belt  30,675,002.99  ops/sec  ±0.32%  (96 runs)  fastest
✔  remeda            3,196,489.57  ops/sec  ±1.42%  (98 runs)  -89.58%
✔  ramda             1,750,275.01  ops/sec  ±0.76%  (91 runs)  -94.29%
✔  rambda           15,140,484.13  ops/sec  ±0.74%  (95 runs)  -50.64%
✔  lodash/fp        16,274,735.54  ops/sec  ±1.16%  (96 runs)  -46.94%
```

→ Fastest is **@mobily/ts-belt**

_flat (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  29,254,676.61  ops/sec  ±0.98%  (98 runs)   fastest
✔  remeda            2,721,239.38  ops/sec  ±1.21%  (91 runs)   -90.70%
✔  ramda             1,071,679.87  ops/sec  ±0.40%  (100 runs)  -96.34%
✔  rambda           12,229,215.60  ops/sec  ±0.62%  (101 runs)  -58.20%
✔  lodash/fp         6,531,040.89  ops/sec  ±0.85%  (94 runs)   -77.68%
```

→ Fastest is **@mobily/ts-belt**

### dropWhile

_dropWhile (single function call)_

```bash
✔  @mobily/ts-belt  45,142,335.50  ops/sec  ±0.40%  (98 runs)  fastest
✔  ramda            15,856,298.44  ops/sec  ±0.34%  (99 runs)  -64.87%
✔  rambda           39,938,763.78  ops/sec  ±0.85%  (98 runs)  -11.53%
✔  lodash/fp        12,940,568.29  ops/sec  ±0.74%  (96 runs)  -71.33%
```

→ Fastest is **@mobily/ts-belt**

_dropWhile (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  34,062,063.03  ops/sec  ±1.62%  (92 runs)  fastest
✔  ramda             2,114,134.73  ops/sec  ±0.60%  (94 runs)  -93.79%
✔  rambda           23,026,096.42  ops/sec  ±1.19%  (93 runs)  -32.40%
✔  lodash/fp         1,014,080.78  ops/sec  ±1.30%  (99 runs)  -97.02%
```

→ Fastest is **@mobily/ts-belt**

### takeWhile

_takeWhile (single function call)_

```bash
✔  @mobily/ts-belt  53,841,544.49  ops/sec  ±0.76%  (98 runs)   fastest
✔  remeda            3,366,711.10  ops/sec  ±0.75%  (100 runs)  -93.75%
✔  ramda            16,180,440.69  ops/sec  ±0.45%  (95 runs)   -69.95%
✔  rambda           47,582,233.69  ops/sec  ±1.73%  (92 runs)   -11.63%
✔  lodash/fp        14,200,699.57  ops/sec  ±0.63%  (99 runs)   -73.63%
```

→ Fastest is **@mobily/ts-belt**

_takeWhile (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  36,280,697.13  ops/sec  ±1.03%  (96 runs)   fastest
✔  remeda            3,305,438.91  ops/sec  ±0.96%  (99 runs)   -90.89%
✔  ramda             2,131,224.10  ops/sec  ±0.47%  (96 runs)   -94.13%
✔  rambda           24,708,617.31  ops/sec  ±0.78%  (101 runs)  -31.90%
✔  lodash/fp           913,869.00  ops/sec  ±1.24%  (98 runs)   -97.48%
```

→ Fastest is **@mobily/ts-belt**

### deepFlat

_deepFlat (single function call)_

```bash
✔  @mobily/ts-belt  17,378,461.97  ops/sec  ±0.21%  (98 runs)   fastest
✔  remeda            1,472,999.45  ops/sec  ±1.67%  (96 runs)   -91.52%
✔  ramda               734,037.77  ops/sec  ±0.59%  (96 runs)   -95.78%
✔  rambda           14,872,600.29  ops/sec  ±0.67%  (101 runs)  -14.42%
✔  lodash/fp         7,315,634.28  ops/sec  ±0.63%  (93 runs)   -57.90%
```

→ Fastest is **@mobily/ts-belt**

_deepFlat (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  16,975,387.50  ops/sec  ±0.64%  (98 runs)   fastest
✔  remeda            1,262,653.53  ops/sec  ±1.00%  (99 runs)   -92.56%
✔  ramda               562,851.78  ops/sec  ±0.35%  (100 runs)  -96.68%
✔  rambda           11,980,934.32  ops/sec  ±0.65%  (99 runs)   -29.42%
✔  lodash/fp         4,663,621.55  ops/sec  ±0.66%  (99 runs)   -72.53%
```

→ Fastest is **@mobily/ts-belt**

### reduce

_reduce (single function call)_

```bash
✔  @mobily/ts-belt  44,890,901.88  ops/sec  ±0.17%  (102 runs)  fastest
✔  remeda            2,660,391.00  ops/sec  ±0.82%  (99 runs)   -94.07%
✔  ramda            10,199,240.77  ops/sec  ±0.65%  (97 runs)   -77.28%
✔  rambda           15,497,091.42  ops/sec  ±1.86%  (92 runs)   -65.48%
✔  lodash/fp         9,658,372.21  ops/sec  ±1.08%  (100 runs)  -78.48%
```

→ Fastest is **@mobily/ts-belt**

_reduce (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  29,249,081.18  ops/sec  ±1.68%  (98 runs)  fastest
✔  remeda            2,600,316.18  ops/sec  ±0.76%  (99 runs)  -91.11%
✔  ramda             1,859,523.13  ops/sec  ±0.40%  (97 runs)  -93.64%
✔  rambda            7,738,434.44  ops/sec  ±1.00%  (97 runs)  -73.54%
✔  lodash/fp           983,149.21  ops/sec  ±0.41%  (97 runs)  -96.64%
```

→ Fastest is **@mobily/ts-belt**

### reject

_reject (single function call)_

```bash
✔  @mobily/ts-belt  43,674,864.88  ops/sec  ±0.37%  (99 runs)   -0.52%
✔  remeda            2,667,304.55  ops/sec  ±1.05%  (98 runs)   -93.89%
✔  ramda            15,648,052.84  ops/sec  ±1.34%  (95 runs)   -64.17%
✔  rambda           43,903,289.85  ops/sec  ±1.10%  (96 runs)   fastest
✔  lodash/fp         6,642,475.50  ops/sec  ±0.60%  (100 runs)  -84.79%
```

→ Fastest is **rambda**

_reject (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  29,968,232.28  ops/sec  ±0.95%  (94 runs)   fastest
✔  remeda            2,425,064.13  ops/sec  ±0.83%  (102 runs)  -91.91%
✔  ramda             2,164,650.22  ops/sec  ±0.56%  (99 runs)   -92.78%
✔  rambda           22,247,195.49  ops/sec  ±0.77%  (98 runs)   -25.76%
✔  lodash/fp           869,645.53  ops/sec  ±1.24%  (96 runs)   -97.10%
```

→ Fastest is **@mobily/ts-belt**

### intersperse

_intersperse (single function call)_

```bash
✔  @mobily/ts-belt  42,262,201.94  ops/sec  ±0.17%  (101 runs)  fastest
✔  ramda            36,213,666.95  ops/sec  ±2.69%  (90 runs)   -14.31%
✔  rambda           38,975,441.40  ops/sec  ±1.18%  (98 runs)   -7.78%
```

→ Fastest is **@mobily/ts-belt**

_intersperse (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  28,844,127.41  ops/sec  ±1.60%  (91 runs)   fastest
✔  ramda             2,457,972.85  ops/sec  ±0.69%  (96 runs)   -91.48%
✔  rambda           22,147,993.34  ops/sec  ±0.30%  (101 runs)  -23.21%
```

→ Fastest is **@mobily/ts-belt**

### fromPairs

_fromPairs (single function call)_

```bash
✔  @mobily/ts-belt  19,577,637.98  ops/sec  ±0.28%  (96 runs)  fastest
✔  remeda           17,733,710.63  ops/sec  ±2.38%  (98 runs)  -9.42%
✔  ramda             8,393,550.72  ops/sec  ±1.11%  (96 runs)  -57.13%
✔  rambda           17,099,235.75  ops/sec  ±2.08%  (96 runs)  -12.66%
✔  lodash/fp        14,083,784.11  ops/sec  ±1.31%  (99 runs)  -28.06%
```

→ Fastest is **@mobily/ts-belt**

_fromPairs (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  18,810,517.55  ops/sec  ±1.67%  (98 runs)   fastest
✔  remeda           13,001,609.57  ops/sec  ±1.47%  (95 runs)   -30.88%
✔  ramda             2,363,718.67  ops/sec  ±0.84%  (100 runs)  -87.43%
✔  rambda           13,397,715.50  ops/sec  ±1.19%  (99 runs)   -28.78%
✔  lodash/fp         2,835,219.16  ops/sec  ±1.16%  (100 runs)  -84.93%
```

→ Fastest is **@mobily/ts-belt**

### groupBy

_groupBy (single function call)_

```bash
✔  @mobily/ts-belt  6,453,084.49  ops/sec  ±0.14%  (97 runs)  fastest
✔  remeda           1,783,616.20  ops/sec  ±1.05%  (95 runs)  -72.36%
✔  ramda            1,667,720.10  ops/sec  ±1.30%  (93 runs)  -74.16%
✔  rambda           6,100,470.04  ops/sec  ±1.29%  (94 runs)  -5.46%
✔  lodash/fp        3,123,622.49  ops/sec  ±0.89%  (97 runs)  -51.59%
```

→ Fastest is **@mobily/ts-belt**

_groupBy (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  5,737,016.02  ops/sec  ±1.42%  (100 runs)  fastest
✔  remeda           1,732,354.64  ops/sec  ±0.83%  (99 runs)   -69.80%
✔  ramda              926,459.38  ops/sec  ±0.72%  (99 runs)   -83.85%
✔  rambda           5,148,709.17  ops/sec  ±1.15%  (97 runs)   -10.25%
✔  lodash/fp          821,242.02  ops/sec  ±1.20%  (99 runs)   -85.69%
```

→ Fastest is **@mobily/ts-belt**

### zip

_zip (single function call)_

```bash
✔  @mobily/ts-belt  26,257,342.69  ops/sec  ±0.18%  (101 runs)  fastest
✔  remeda            2,944,593.11  ops/sec  ±2.14%  (97 runs)   -88.79%
✔  ramda            20,505,724.42  ops/sec  ±2.57%  (92 runs)   -21.90%
✔  rambda           21,644,405.64  ops/sec  ±1.85%  (97 runs)   -17.57%
✔  lodash/fp         4,468,712.60  ops/sec  ±1.23%  (91 runs)   -82.98%
```

→ Fastest is **@mobily/ts-belt**

_zip (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  17,376,323.89  ops/sec  ±1.57%  (99 runs)  fastest
✔  remeda            2,970,738.67  ops/sec  ±1.62%  (99 runs)  -82.90%
✔  ramda             2,275,885.75  ops/sec  ±0.88%  (98 runs)  -86.90%
✔  rambda           13,698,841.76  ops/sec  ±1.62%  (94 runs)  -21.16%
✔  lodash/fp           964,235.68  ops/sec  ±1.32%  (94 runs)  -94.45%
```

→ Fastest is **@mobily/ts-belt**

### forEach

_forEach (single function call)_

```bash
✔  @mobily/ts-belt  156,343,779.00  ops/sec  ±0.22%  (101 runs)  -0.41%
✔  remeda             3,119,440.98  ops/sec  ±0.57%  (95 runs)   -98.01%
✔  ramda            153,477,424.11  ops/sec  ±0.98%  (96 runs)   -2.24%
✔  rambda           156,993,020.65  ops/sec  ±0.08%  (102 runs)  fastest
✔  lodash/fp          7,882,079.56  ops/sec  ±0.45%  (101 runs)  -94.98%
```

→ Fastest is **rambda**

_forEach (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  86,410,924.45  ops/sec  ±0.46%  (93 runs)   fastest
✔  remeda            2,506,384.44  ops/sec  ±0.41%  (99 runs)   -97.10%
✔  ramda             2,516,378.04  ops/sec  ±0.52%  (100 runs)  -97.09%
✔  rambda           41,163,940.90  ops/sec  ±0.26%  (99 runs)   -52.36%
✔  lodash/fp           946,029.72  ops/sec  ±1.17%  (100 runs)  -98.91%
```

→ Fastest is **@mobily/ts-belt**

### uniq

_uniq (single function call)_

```bash
✔  @mobily/ts-belt  21,061,636.39  ops/sec  ±0.56%  (100 runs)  -10.46%
✔  remeda            2,146,964.51  ops/sec  ±1.60%  (96 runs)   -90.87%
✔  ramda               978,474.20  ops/sec  ±1.04%  (91 runs)   -95.84%
✔  rambda            4,468,372.10  ops/sec  ±0.79%  (97 runs)   -81.00%
✔  lodash/fp        23,522,629.34  ops/sec  ±1.22%  (96 runs)   fastest
```

→ Fastest is **lodash/fp**

_uniq (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  19,263,372.87  ops/sec  ±1.13%  (96 runs)   fastest
✔  remeda            2,209,683.09  ops/sec  ±0.76%  (90 runs)   -88.53%
✔  ramda               727,474.97  ops/sec  ±0.42%  (100 runs)  -96.22%
✔  rambda            3,786,202.48  ops/sec  ±0.95%  (94 runs)   -80.35%
✔  lodash/fp         7,895,024.29  ops/sec  ±1.11%  (97 runs)   -59.02%
```

→ Fastest is **@mobily/ts-belt**

### toPairs

_toPairs (single function call)_

```bash
✔  @mobily/ts-belt  39,663,935.27  ops/sec  ±0.99%  (96 runs)  fastest
✔  remeda           33,822,892.71  ops/sec  ±4.16%  (83 runs)  -14.73%
✔  ramda            10,359,838.79  ops/sec  ±1.44%  (89 runs)  -73.88%
✔  rambda           36,762,062.09  ops/sec  ±2.62%  (86 runs)  -7.32%
✔  lodash/fp        11,892,014.78  ops/sec  ±0.85%  (91 runs)  -70.02%
```

→ Fastest is **@mobily/ts-belt**

_toPairs (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  38,293,885.44  ops/sec  ±1.99%  (92 runs)  fastest
✔  remeda           23,029,615.61  ops/sec  ±1.76%  (91 runs)  -39.86%
✔  ramda             2,481,320.48  ops/sec  ±0.67%  (96 runs)  -93.52%
✔  rambda           24,127,115.44  ops/sec  ±1.51%  (96 runs)  -36.99%
✔  lodash/fp         5,716,370.03  ops/sec  ±1.19%  (94 runs)  -85.07%
```

→ Fastest is **@mobily/ts-belt**

### map

_map (single function call)_

```bash
✔  @mobily/ts-belt  82,703,682.92  ops/sec  ±0.83%  (96 runs)  fastest
✔  remeda            2,966,512.35  ops/sec  ±1.53%  (92 runs)  -96.41%
✔  ramda            19,918,582.19  ops/sec  ±0.55%  (97 runs)  -75.92%
✔  rambda           81,584,073.11  ops/sec  ±0.88%  (87 runs)  -1.35%
✔  lodash/fp        13,133,226.26  ops/sec  ±0.59%  (99 runs)  -84.12%
```

→ Fastest is **@mobily/ts-belt**

_map (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  49,359,454.47  ops/sec  ±0.68%  (94 runs)  fastest
✔  remeda            2,470,246.41  ops/sec  ±1.02%  (96 runs)  -95.00%
✔  ramda             2,294,312.66  ops/sec  ±0.48%  (98 runs)  -95.35%
✔  rambda           32,837,744.70  ops/sec  ±0.42%  (99 runs)  -33.47%
✔  lodash/fp           966,286.02  ops/sec  ±1.27%  (97 runs)  -98.04%
```

→ Fastest is **@mobily/ts-belt**

### filter

_filter (single function call)_

```bash
✔  @mobily/ts-belt  48,676,101.83  ops/sec  ±0.29%  (100 runs)  fastest
✔  remeda            2,588,688.05  ops/sec  ±1.49%  (98 runs)   -94.68%
✔  ramda            16,662,990.83  ops/sec  ±0.78%  (97 runs)   -65.77%
✔  rambda           46,443,339.53  ops/sec  ±1.91%  (99 runs)   -4.59%
✔  lodash/fp         6,620,795.22  ops/sec  ±0.79%  (96 runs)   -86.40%
```

→ Fastest is **@mobily/ts-belt**

_filter (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  33,905,739.70  ops/sec  ±1.31%  (92 runs)  fastest
✔  remeda            2,274,454.04  ops/sec  ±1.03%  (92 runs)  -93.29%
✔  ramda             2,163,932.74  ops/sec  ±0.62%  (92 runs)  -93.62%
✔  rambda           23,525,021.97  ops/sec  ±1.13%  (95 runs)  -30.62%
✔  lodash/fp           887,235.61  ops/sec  ±1.23%  (96 runs)  -97.38%
```

→ Fastest is **@mobily/ts-belt**

### find

_find (single function call)_

```bash
✔  @mobily/ts-belt  146,768,258.80  ops/sec  ±0.75%  (100 runs)  -4.79%
✔  remeda             3,365,206.02  ops/sec  ±0.84%  (97 runs)   -97.82%
✔  ramda             29,221,883.82  ops/sec  ±0.70%  (92 runs)   -81.04%
✔  rambda           154,145,860.59  ops/sec  ±0.35%  (99 runs)   fastest
✔  lodash/fp          9,317,023.36  ops/sec  ±0.53%  (95 runs)   -93.96%
```

→ Fastest is **rambda**

_find (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  75,330,560.60  ops/sec  ±1.15%  (85 runs)  fastest
✔  remeda            2,762,871.13  ops/sec  ±1.03%  (99 runs)  -96.33%
✔  ramda             2,310,735.72  ops/sec  ±0.56%  (93 runs)  -96.93%
✔  rambda           37,606,841.82  ops/sec  ±0.66%  (94 runs)  -50.08%
✔  lodash/fp           941,843.70  ops/sec  ±1.28%  (97 runs)  -98.75%
```

→ Fastest is **@mobily/ts-belt**

### splitEvery

_splitEvery/chunk (single function call)_

```bash
✔  @mobily/ts-belt  26,941,827.27  ops/sec  ±0.31%  (98 runs)  fastest
✔  remeda            2,757,948.51  ops/sec  ±2.18%  (93 runs)  -89.76%
✔  ramda             9,870,559.36  ops/sec  ±1.62%  (87 runs)  -63.36%
✔  rambda           15,192,350.56  ops/sec  ±1.26%  (97 runs)  -43.61%
✔  lodash/fp        11,484,212.88  ops/sec  ±1.05%  (93 runs)  -57.37%
```

→ Fastest is **@mobily/ts-belt**

_splitEvery/chunk (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  21,127,708.07  ops/sec  ±1.40%  (96 runs)   fastest
✔  remeda            3,568,214.48  ops/sec  ±1.39%  (98 runs)   -83.11%
✔  ramda             1,812,107.48  ops/sec  ±0.35%  (98 runs)   -91.42%
✔  rambda           11,369,384.48  ops/sec  ±0.49%  (94 runs)   -46.19%
✔  lodash/fp         1,007,344.44  ops/sec  ±1.22%  (100 runs)  -95.23%
```

→ Fastest is **@mobily/ts-belt**
