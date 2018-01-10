# Feed Reader Testing

## Overview

> 在此项目中，我们为你提供了一个基于 Web 的 RSS 反馈阅读 应用程序。显然，该应用程序的原开发人员了解 测试的价值，已在其中包含了 Jasmine，并已编写了 第一个测试套件！但他们后来决定开创 自己的公司，留下了这个测试套件尚不完整的 应用程序。接下来就是你的任务了。

## Testing Procedures

1. 载入index.html，待页面主体与测试框架加载完成。

2. 滚动到页面底部，你可以看到测试套件，测试用例与测试项目。
![Figure-1](/misc/guide_0.png)
_**（Figure-1: 测试套件，测试用例与测试项目）**_

3. 依次点击RSS Feeds，The menu，Initial Entries三个测试用例中的测试项目，以完成测试。

4. 对于New Feed Selection用例：该用例中的测试可以重复进行。每进行一次测试，页面Feed Container区域中的条目会被刷新，新载入的条目来源随机。

## Timeout, What the heck

有时候在运行测试的时候，测试套件会出现超时失败提示。
![Figure-2](/misc/guide_1.png)
_**（Figure-2: 500 Response Code）**_


因为Google已经不再维护Google Feed Reader API了，这个项目所使用的RSS Parsing API是Udacity自己提供的。所以，拥塞或是抽风导致的超时难免的。

如果遇到这个情况，请刷新页面，或者重新运行上次的测试。
