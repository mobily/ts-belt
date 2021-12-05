---
id: macbook-air-2020
title: MacBook Air (M1, 2020)
---

| Processor | Memory | Node | Author |
|-----------|--------|------|-------|
| Apple M1 | 16 GB LPDDR4| v17.0.1 | [@panr](https://github.com/panr) |

### map-filter-reduce

_map → filter → reduce_

```bash
✔  @mobily/ts-belt  155,152.01  ops/sec  ±0.11%  (100 runs)  fastest
✔  remeda            15,485.42  ops/sec  ±2.08%  (89 runs)   -90.02%
✔  ramda             79,884.68  ops/sec  ±0.75%  (101 runs)  -48.51%
✔  rambda           151,184.76  ops/sec  ±0.58%  (97 runs)   -2.56%
✔  lodash/fp         39,991.04  ops/sec  ±2.70%  (98 runs)   -74.22%
```

→ Fastest is **@mobily/ts-belt**

### deepFlat-uniq-groupBy

_deepFlat → uniq → groupBy_

```bash
✔  @mobily/ts-belt  1,336,209.26  ops/sec  ±0.24%  (99 runs)  fastest
✔  remeda             296,546.46  ops/sec  ±2.66%  (94 runs)  -77.81%
✔  ramda              161,513.54  ops/sec  ±1.08%  (92 runs)  -87.91%
✔  rambda             981,944.48  ops/sec  ±1.20%  (91 runs)  -26.51%
✔  lodash/fp          326,745.75  ops/sec  ±0.55%  (95 runs)  -75.55%
```

→ Fastest is **@mobily/ts-belt**

### sort

_sort (single function call)_

```bash
✔  @mobily/ts-belt  3,132,916.12  ops/sec  ±0.30%  (97 runs)  fastest
✔  remeda             898,190.91  ops/sec  ±0.92%  (98 runs)  -71.33%
✔  ramda            1,545,964.61  ops/sec  ±1.65%  (89 runs)  -50.65%
✔  rambda           1,669,391.27  ops/sec  ±0.47%  (97 runs)  -46.71%
✔  lodash/fp          926,179.99  ops/sec  ±1.98%  (98 runs)  -70.44%
```

→ Fastest is **@mobily/ts-belt**

_sort (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  3,722,454.27  ops/sec  ±0.49%  (100 runs)  fastest
✔  remeda             815,977.59  ops/sec  ±0.61%  (94 runs)   -78.08%
✔  ramda              727,087.77  ops/sec  ±0.42%  (99 runs)   -80.47%
✔  rambda           1,490,130.13  ops/sec  ±0.48%  (98 runs)   -59.97%
✔  lodash/fp          409,380.64  ops/sec  ±1.59%  (94 runs)   -89.00%
```

→ Fastest is **@mobily/ts-belt**

### unzip

_unzip (single function call)_

```bash
✔  @mobily/ts-belt  29,124,992.73  ops/sec  ±0.39%  (92 runs)  fastest
✔  lodash/fp         1,232,114.38  ops/sec  ±1.27%  (98 runs)  -95.77%
```

→ Fastest is **@mobily/ts-belt**

_unzip (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  20,816,975.88  ops/sec  ±0.88%  (91 runs)  fastest
✔  lodash/fp         1,047,443.62  ops/sec  ±0.95%  (98 runs)  -94.97%
```

→ Fastest is **@mobily/ts-belt**

### flat

_flat (single function call)_

```bash
✔  @mobily/ts-belt  17,896,513.25  ops/sec  ±0.20%  (95 runs)  fastest
✔  remeda            1,818,290.04  ops/sec  ±2.65%  (90 runs)  -89.84%
✔  ramda             1,000,183.62  ops/sec  ±0.62%  (89 runs)  -94.41%
✔  rambda            8,739,731.21  ops/sec  ±1.18%  (95 runs)  -51.17%
✔  lodash/fp         9,622,900.69  ops/sec  ±0.92%  (97 runs)  -46.23%
```

→ Fastest is **@mobily/ts-belt**

_flat (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  16,709,922.19  ops/sec  ±0.63%  (99 runs)  fastest
✔  remeda            1,630,136.09  ops/sec  ±0.42%  (96 runs)  -90.24%
✔  ramda               598,410.61  ops/sec  ±0.66%  (99 runs)  -96.42%
✔  rambda            7,012,200.79  ops/sec  ±1.20%  (97 runs)  -58.04%
✔  lodash/fp         3,669,144.05  ops/sec  ±0.95%  (99 runs)  -78.04%
```

→ Fastest is **@mobily/ts-belt**

### dropWhile

_dropWhile (single function call)_

```bash
✔  @mobily/ts-belt  26,639,660.50  ops/sec  ±0.44%  (96 runs)  fastest
✔  ramda             8,995,201.39  ops/sec  ±1.23%  (95 runs)  -66.23%
✔  rambda           23,488,421.62  ops/sec  ±1.35%  (94 runs)  -11.83%
✔  lodash/fp         7,014,920.04  ops/sec  ±1.18%  (94 runs)  -73.67%
```

→ Fastest is **@mobily/ts-belt**

_dropWhile (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  20,065,004.18  ops/sec  ±1.34%  (94 runs)  fastest
✔  ramda             1,257,354.89  ops/sec  ±0.43%  (97 runs)  -93.73%
✔  rambda           14,164,228.73  ops/sec  ±0.83%  (95 runs)  -29.41%
✔  lodash/fp           615,553.15  ops/sec  ±1.38%  (98 runs)  -96.93%
```

→ Fastest is **@mobily/ts-belt**

### takeWhile

_takeWhile (single function call)_

```bash
✔  @mobily/ts-belt  31,740,176.18  ops/sec  ±0.87%  (97 runs)  fastest
✔  remeda            2,016,434.72  ops/sec  ±0.88%  (97 runs)  -93.65%
✔  ramda             9,355,097.24  ops/sec  ±1.17%  (90 runs)  -70.53%
✔  rambda           28,318,959.09  ops/sec  ±1.82%  (91 runs)  -10.78%
✔  lodash/fp         8,513,473.91  ops/sec  ±1.05%  (97 runs)  -73.18%
```

→ Fastest is **@mobily/ts-belt**

_takeWhile (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  20,736,453.04  ops/sec  ±1.42%  (92 runs)  fastest
✔  remeda            1,855,651.74  ops/sec  ±1.14%  (97 runs)  -91.05%
✔  ramda             1,248,229.22  ops/sec  ±0.86%  (94 runs)  -93.98%
✔  rambda           14,114,954.84  ops/sec  ±1.32%  (93 runs)  -31.93%
✔  lodash/fp           503,813.16  ops/sec  ±4.21%  (89 runs)  -97.57%
```

→ Fastest is **@mobily/ts-belt**

### deepFlat

_deepFlat (single function call)_

```bash
✔  @mobily/ts-belt  10,246,783.82  ops/sec  ±0.78%  (97 runs)   fastest
✔  remeda              869,860.64  ops/sec  ±1.79%  (96 runs)   -91.51%
✔  ramda               438,419.34  ops/sec  ±0.97%  (92 runs)   -95.72%
✔  rambda            8,944,535.30  ops/sec  ±1.20%  (100 runs)  -12.71%
✔  lodash/fp         4,309,899.70  ops/sec  ±0.50%  (97 runs)   -57.94%
```

→ Fastest is **@mobily/ts-belt**

_deepFlat (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  10,255,988.56  ops/sec  ±0.72%  (95 runs)  fastest
✔  remeda              769,727.10  ops/sec  ±1.19%  (92 runs)  -92.49%
✔  ramda               352,683.57  ops/sec  ±0.26%  (97 runs)  -96.56%
✔  rambda            6,554,589.53  ops/sec  ±5.19%  (93 runs)  -36.09%
✔  lodash/fp         2,798,186.70  ops/sec  ±0.18%  (95 runs)  -72.72%
```

→ Fastest is **@mobily/ts-belt**

### reduce

_reduce (single function call)_

```bash
✔  @mobily/ts-belt  26,510,467.53  ops/sec  ±0.36%  (99 runs)  fastest
✔  remeda            1,594,628.29  ops/sec  ±0.96%  (99 runs)  -93.98%
✔  ramda             5,953,137.53  ops/sec  ±0.76%  (91 runs)  -77.54%
✔  rambda            9,211,148.91  ops/sec  ±1.49%  (92 runs)  -65.25%
✔  lodash/fp         5,517,952.12  ops/sec  ±1.24%  (95 runs)  -79.19%
```

→ Fastest is **@mobily/ts-belt**

_reduce (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  16,442,514.25  ops/sec  ±2.37%  (88 runs)   fastest
✔  remeda            1,447,294.91  ops/sec  ±1.13%  (96 runs)   -91.20%
✔  ramda             1,056,195.39  ops/sec  ±0.82%  (100 runs)  -93.58%
✔  rambda            4,332,922.57  ops/sec  ±1.47%  (99 runs)   -73.65%
✔  lodash/fp           600,139.06  ops/sec  ±1.38%  (100 runs)  -96.35%
```

→ Fastest is **@mobily/ts-belt**

### reject

_reject (single function call)_

```bash
✔  @mobily/ts-belt  25,556,967.43  ops/sec  ±0.72%  (100 runs)  fastest
✔  remeda            1,597,375.60  ops/sec  ±1.12%  (96 runs)   -93.75%
✔  ramda             9,122,781.37  ops/sec  ±1.28%  (93 runs)   -64.30%
✔  rambda           25,096,982.81  ops/sec  ±2.38%  (86 runs)   -1.80%
✔  lodash/fp         3,884,877.52  ops/sec  ±0.68%  (97 runs)   -84.80%
```

→ Fastest is **@mobily/ts-belt**

_reject (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  17,420,857.46  ops/sec  ±0.53%  (97 runs)  fastest
✔  remeda            1,449,367.24  ops/sec  ±1.22%  (98 runs)  -91.68%
✔  ramda             1,206,573.81  ops/sec  ±2.59%  (94 runs)  -93.07%
✔  rambda           12,783,644.74  ops/sec  ±1.11%  (92 runs)  -26.62%
✔  lodash/fp           549,327.80  ops/sec  ±1.47%  (97 runs)  -96.85%
```

→ Fastest is **@mobily/ts-belt**

### intersperse

_intersperse (single function call)_

```bash
✔  @mobily/ts-belt  24,418,465.47  ops/sec  ±1.02%  (97 runs)  -0.52%
✔  ramda            23,787,171.16  ops/sec  ±0.95%  (99 runs)  -3.10%
✔  rambda           24,546,930.34  ops/sec  ±1.27%  (99 runs)  fastest
```

→ Fastest is **rambda**

_intersperse (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  16,920,730.20  ops/sec  ±1.28%  (95 runs)  fastest
✔  ramda             1,440,822.75  ops/sec  ±0.71%  (95 runs)  -91.48%
✔  rambda           12,872,133.44  ops/sec  ±0.91%  (97 runs)  -23.93%
```

→ Fastest is **@mobily/ts-belt**

### fromPairs

_fromPairs (single function call)_

```bash
✔  @mobily/ts-belt  11,589,600.01  ops/sec  ±0.68%  (100 runs)  fastest
✔  remeda           10,651,157.00  ops/sec  ±2.04%  (92 runs)   -8.10%
✔  ramda             5,039,548.73  ops/sec  ±1.34%  (95 runs)   -56.52%
✔  rambda           10,089,150.68  ops/sec  ±2.58%  (94 runs)   -12.95%
✔  lodash/fp         8,237,016.20  ops/sec  ±1.70%  (87 runs)   -28.93%
```

→ Fastest is **@mobily/ts-belt**

_fromPairs (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  11,176,754.04  ops/sec  ±2.33%  (96 runs)   fastest
✔  remeda            7,525,723.06  ops/sec  ±1.55%  (100 runs)  -32.67%
✔  ramda             1,321,266.10  ops/sec  ±1.40%  (96 runs)   -88.18%
✔  rambda            7,832,241.42  ops/sec  ±0.54%  (95 runs)   -29.92%
✔  lodash/fp         1,702,954.65  ops/sec  ±0.83%  (95 runs)   -84.76%
```

→ Fastest is **@mobily/ts-belt**

### groupBy

_groupBy (single function call)_

```bash
✔  @mobily/ts-belt  3,571,986.26  ops/sec  ±0.14%  (97 runs)  fastest
✔  remeda           1,056,347.71  ops/sec  ±1.21%  (97 runs)  -70.43%
✔  ramda              952,416.30  ops/sec  ±1.74%  (95 runs)  -73.34%
✔  rambda           3,432,453.10  ops/sec  ±1.30%  (94 runs)  -3.91%
✔  lodash/fp        1,597,894.20  ops/sec  ±3.96%  (85 runs)  -55.27%
```

→ Fastest is **@mobily/ts-belt**

_groupBy (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  3,146,454.47  ops/sec  ±1.23%  (96 runs)   fastest
✔  remeda             976,016.45  ops/sec  ±0.90%  (101 runs)  -68.98%
✔  ramda              522,801.33  ops/sec  ±0.81%  (99 runs)   -83.38%
✔  rambda           2,847,114.95  ops/sec  ±0.67%  (96 runs)   -9.51%
✔  lodash/fp          482,244.34  ops/sec  ±1.60%  (98 runs)   -84.67%
```

→ Fastest is **@mobily/ts-belt**

### zip

_zip (single function call)_

```bash
✔  @mobily/ts-belt  15,623,371.03  ops/sec  ±0.14%  (96 runs)  fastest
✔  remeda            1,750,982.61  ops/sec  ±2.40%  (89 runs)  -88.79%
✔  ramda            11,690,932.72  ops/sec  ±2.32%  (91 runs)  -25.17%
✔  rambda           12,838,790.36  ops/sec  ±3.19%  (97 runs)  -17.82%
✔  lodash/fp         2,592,188.19  ops/sec  ±1.34%  (94 runs)  -83.41%
```

→ Fastest is **@mobily/ts-belt**

_zip (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  10,126,865.26  ops/sec  ±1.70%  (98 runs)  fastest
✔  remeda            1,665,098.26  ops/sec  ±1.49%  (96 runs)  -83.56%
✔  ramda             1,282,877.91  ops/sec  ±1.14%  (98 runs)  -87.33%
✔  rambda            7,844,380.07  ops/sec  ±2.50%  (94 runs)  -22.54%
✔  lodash/fp           589,350.31  ops/sec  ±0.86%  (97 runs)  -94.18%
```

→ Fastest is **@mobily/ts-belt**

### forEach

_forEach (single function call)_

```bash
✔  @mobily/ts-belt  93,369,509.94  ops/sec  ±0.22%  (98 runs)  -0.35%
✔  remeda            1,797,182.95  ops/sec  ±1.54%  (97 runs)  -98.08%
✔  ramda            91,578,349.56  ops/sec  ±0.08%  (98 runs)  -2.26%
✔  rambda           93,697,283.34  ops/sec  ±0.05%  (97 runs)  fastest
✔  lodash/fp         4,457,378.68  ops/sec  ±0.73%  (99 runs)  -95.24%
```

→ Fastest is **rambda**

_forEach (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  50,696,063.88  ops/sec  ±0.42%  (99 runs)  fastest
✔  remeda            1,503,054.82  ops/sec  ±0.99%  (98 runs)  -97.04%
✔  ramda             1,425,797.36  ops/sec  ±0.53%  (96 runs)  -97.19%
✔  rambda           24,360,615.39  ops/sec  ±0.36%  (99 runs)  -51.95%
✔  lodash/fp           589,670.78  ops/sec  ±1.41%  (96 runs)  -98.84%
```

→ Fastest is **@mobily/ts-belt**

### uniq

_uniq (single function call)_

```bash
✔  @mobily/ts-belt  12,241,381.87  ops/sec  ±1.21%  (95 runs)  -13.99%
✔  remeda            1,282,815.56  ops/sec  ±1.80%  (97 runs)  -90.99%
✔  ramda               577,555.97  ops/sec  ±0.50%  (97 runs)  -95.94%
✔  rambda            2,674,347.71  ops/sec  ±0.83%  (94 runs)  -81.21%
✔  lodash/fp        14,231,710.61  ops/sec  ±0.99%  (96 runs)  fastest
```

→ Fastest is **lodash/fp**

_uniq (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  11,527,390.75  ops/sec  ±1.72%  (94 runs)   fastest
✔  remeda            1,359,744.10  ops/sec  ±1.03%  (101 runs)  -88.20%
✔  ramda               416,090.06  ops/sec  ±0.51%  (94 runs)   -96.39%
✔  rambda            2,217,348.48  ops/sec  ±0.67%  (100 runs)  -80.76%
✔  lodash/fp         4,793,612.52  ops/sec  ±2.08%  (99 runs)   -58.42%
```

→ Fastest is **@mobily/ts-belt**

### toPairs

_toPairs (single function call)_

```bash
✔  @mobily/ts-belt  24,507,031.00  ops/sec  ±0.16%  (97 runs)  fastest
✔  remeda           20,481,271.39  ops/sec  ±4.50%  (85 runs)  -16.43%
✔  ramda             6,114,291.88  ops/sec  ±0.96%  (94 runs)  -75.05%
✔  rambda           23,543,170.30  ops/sec  ±2.05%  (86 runs)  -3.93%
✔  lodash/fp         6,890,139.57  ops/sec  ±1.22%  (99 runs)  -71.89%
```

→ Fastest is **@mobily/ts-belt**

_toPairs (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  23,955,924.34  ops/sec  ±1.77%  (96 runs)   fastest
✔  remeda           13,739,575.84  ops/sec  ±1.57%  (98 runs)   -42.65%
✔  ramda             1,428,897.08  ops/sec  ±0.69%  (99 runs)   -94.04%
✔  rambda           14,575,882.12  ops/sec  ±1.49%  (99 runs)   -39.16%
✔  lodash/fp         3,537,194.03  ops/sec  ±1.20%  (101 runs)  -85.23%
```

→ Fastest is **@mobily/ts-belt**

### map

_map (single function call)_

```bash
✔  @mobily/ts-belt  49,472,521.72  ops/sec  ±0.80%  (97 runs)  fastest
✔  remeda            1,785,889.21  ops/sec  ±1.58%  (94 runs)  -96.39%
✔  ramda            11,429,248.08  ops/sec  ±2.40%  (89 runs)  -76.90%
✔  rambda           47,191,593.01  ops/sec  ±3.30%  (88 runs)  -4.61%
✔  lodash/fp         7,787,941.68  ops/sec  ±1.01%  (94 runs)  -84.26%
```

→ Fastest is **@mobily/ts-belt**

_map (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  28,976,688.79  ops/sec  ±0.89%  (92 runs)  fastest
✔  remeda            1,456,629.08  ops/sec  ±1.98%  (96 runs)  -94.97%
✔  ramda             1,334,297.65  ops/sec  ±0.54%  (98 runs)  -95.40%
✔  rambda           18,722,579.14  ops/sec  ±1.39%  (92 runs)  -35.39%
✔  lodash/fp           578,604.91  ops/sec  ±1.61%  (99 runs)  -98.00%
```

→ Fastest is **@mobily/ts-belt**

### filter

_filter (single function call)_

```bash
✔  @mobily/ts-belt  28,022,854.88  ops/sec  ±2.54%  (88 runs)  fastest
✔  remeda            1,536,086.48  ops/sec  ±1.67%  (94 runs)  -94.52%
✔  ramda             9,714,008.25  ops/sec  ±1.03%  (87 runs)  -65.34%
✔  rambda           27,361,281.41  ops/sec  ±1.90%  (94 runs)  -2.36%
✔  lodash/fp         4,237,844.75  ops/sec  ±0.77%  (96 runs)  -84.88%
```

→ Fastest is **@mobily/ts-belt**

_filter (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  21,144,971.87  ops/sec  ±1.20%  (94 runs)  fastest
✔  remeda            1,454,257.43  ops/sec  ±1.02%  (98 runs)  -93.12%
✔  ramda             1,309,151.15  ops/sec  ±0.89%  (95 runs)  -93.81%
✔  rambda           14,498,423.26  ops/sec  ±1.71%  (92 runs)  -31.43%
✔  lodash/fp           542,158.53  ops/sec  ±1.53%  (92 runs)  -97.44%
```

→ Fastest is **@mobily/ts-belt**

### find

_find (single function call)_

```bash
✔  @mobily/ts-belt  87,630,267.44  ops/sec  ±1.22%  (99 runs)  -5.78%
✔  remeda            2,024,225.75  ops/sec  ±0.88%  (97 runs)  -97.82%
✔  ramda            17,342,711.94  ops/sec  ±0.76%  (93 runs)  -81.35%
✔  rambda           93,006,359.94  ops/sec  ±0.56%  (98 runs)  fastest
✔  lodash/fp         5,054,493.46  ops/sec  ±0.69%  (97 runs)  -94.57%
```

→ Fastest is **rambda**

_find (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  46,978,412.84  ops/sec  ±0.63%  (96 runs)   fastest
✔  remeda            1,679,014.52  ops/sec  ±0.99%  (99 runs)   -96.43%
✔  ramda             1,407,100.53  ops/sec  ±0.48%  (95 runs)   -97.00%
✔  rambda           23,477,747.08  ops/sec  ±0.42%  (95 runs)   -50.02%
✔  lodash/fp           565,895.65  ops/sec  ±1.32%  (100 runs)  -98.80%
```

→ Fastest is **@mobily/ts-belt**

### splitEvery

_splitEvery/chunk (single function call)_

```bash
✔  @mobily/ts-belt  15,786,764.21  ops/sec  ±0.29%  (95 runs)  fastest
✔  remeda            1,644,836.92  ops/sec  ±2.14%  (90 runs)  -89.58%
✔  ramda             5,703,199.14  ops/sec  ±1.37%  (93 runs)  -63.87%
✔  rambda            9,032,295.12  ops/sec  ±1.29%  (99 runs)  -42.79%
✔  lodash/fp         6,164,497.70  ops/sec  ±1.94%  (93 runs)  -60.95%
```

→ Fastest is **@mobily/ts-belt**

_splitEvery/chunk (function call inside `pipe`)_

```bash
✔  @mobily/ts-belt  12,262,008.53  ops/sec  ±1.40%  (99 runs)  fastest
✔  remeda            2,020,125.60  ops/sec  ±1.06%  (97 runs)  -83.53%
✔  ramda             1,009,669.48  ops/sec  ±0.98%  (97 runs)  -91.77%
✔  rambda            6,579,261.03  ops/sec  ±1.20%  (93 runs)  -46.34%
✔  lodash/fp           610,185.31  ops/sec  ±1.40%  (96 runs)  -95.02%
```

→ Fastest is **@mobily/ts-belt**
