import { type } from "os";

const random_jokes = [
  {
    title: "What is the object oriented way to get wealthy ?",
    body: "Inheritance"
  },
  {
    title: "To understand what recursion is...",
    body: "You must first understand what recursion is"
  },
  {
    title: "What do you call a factory that sells passable products?",
    body: "A satisfactory"
  }
];

const v2ex_posts = 
[
  {
      "node": {
          "avatar_large": "//cdn.v2ex.com/navatar/94f6/d7e0/300_large.png?m=1567062424",
          "name": "programmer",
          "avatar_normal": "//cdn.v2ex.com/navatar/94f6/d7e0/300_normal.png?m=1567062424",
          "title": "程序员",
          "url": "https://www.v2ex.com/go/programmer",
          "topics": 32335,
          "footer": "",
          "header": "While code monkeys are not eating bananas, they're coding.",
          "title_alternative": "Programmer",
          "avatar_mini": "//cdn.v2ex.com/navatar/94f6/d7e0/300_mini.png?m=1567062424",
          "stars": 6072,
          "root": false,
          "id": 300,
          "parent_node_name": "computer"
      },
      "member": {
          "username": "bokchoys",
          "website": "https://www.emin.ink",
          "github": "hiemin",
          "psn": "",
          "avatar_normal": "//cdn.v2ex.com/avatar/0c5f/2d5d/358742_mini.png?m=1555001957",
          "bio": "",
          "url": "https://www.v2ex.com/u/bokchoys",
          "tagline": "",
          "twitter": "",
          "created": 1540515526,
          "avatar_large": "//cdn.v2ex.com/avatar/0c5f/2d5d/358742_mini.png?m=1555001957",
          "avatar_mini": "//cdn.v2ex.com/avatar/0c5f/2d5d/358742_mini.png?m=1555001957",
          "location": "",
          "btc": "",
          "id": 358742
      },
      "last_reply_by": "Mosugar",
      "last_touched": 1567948519,
      "title": "你有没有曾经一刻感到孤独过",
      "url": "https://www.v2ex.com/t/599002",
      "created": 1567920574,
      "content": "* 中国的城市复制得都差不多了，走到哪里都长得一样，感觉城市的归属感太低了。\r\n* 深夜打代码的时候。\r\n* 没有真正能够倾诉的朋友。\r\n* 即便是有了女朋友。",
      "content_rendered": "<ul>\n<li>中国的城市复制得都差不多了，走到哪里都长得一样，感觉城市的归属感太低了。</li>\n<li>深夜打代码的时候。</li>\n<li>没有真正能够倾诉的朋友。</li>\n<li>即便是有了女朋友。</li>\n</ul>\n",
      "last_modified": 1567920574,
      "replies": 56,
      "id": 599002
  },
  {
      "node": {
          "avatar_large": "//cdn.v2ex.com/navatar/c20a/d4d7/12_large.png?m=1564402099",
          "name": "qna",
          "avatar_normal": "//cdn.v2ex.com/navatar/c20a/d4d7/12_normal.png?m=1564402099",
          "title": "问与答",
          "url": "https://www.v2ex.com/go/qna",
          "topics": 138992,
          "footer": "",
          "header": "一个更好的世界需要你持续地提出好问题。",
          "title_alternative": "Questions and Answers",
          "avatar_mini": "//cdn.v2ex.com/navatar/c20a/d4d7/12_mini.png?m=1564402099",
          "stars": 2611,
          "root": false,
          "id": 12,
          "parent_node_name": "v2ex"
      },
      "member": {
          "username": "Alain1995",
          "website": "",
          "github": "",
          "psn": "",
          "avatar_normal": "//cdn.v2ex.com/avatar/d6fa/44f5/155177_mini.png?m=1452590656",
          "bio": "",
          "url": "https://www.v2ex.com/u/Alain1995",
          "tagline": "",
          "twitter": "",
          "created": 1452590531,
          "avatar_large": "//cdn.v2ex.com/avatar/d6fa/44f5/155177_mini.png?m=1452590656",
          "avatar_mini": "//cdn.v2ex.com/avatar/d6fa/44f5/155177_mini.png?m=1452590656",
          "location": "",
          "btc": "",
          "id": 155177
      },
      "last_reply_by": "depress",
      "last_touched": 1567948636,
      "title": "大家平时都是怎么清洗自己的眼镜的呢。",
      "url": "https://www.v2ex.com/t/599032",
      "created": 1567929925,
      "content": "迫于眼镜时常会落灰，也不容易擦干净，看着很难受。\r\n有人用过清洗机吗。求推荐。\r\n\r\n价格 100-200 之内。",
      "content_rendered": "迫于眼镜时常会落灰，也不容易擦干净，看着很难受。<br />有人用过清洗机吗。求推荐。<br /><br />价格 100-200 之内。",
      "last_modified": 1567929925,
      "replies": 44,
      "id": 599032
  },
  {
      "node": {
          "avatar_large": "//cdn.v2ex.com/navatar/03af/dbd6/63_large.png?m=1543386849",
          "name": "java",
          "avatar_normal": "//cdn.v2ex.com/navatar/03af/dbd6/63_normal.png?m=1543386849",
          "title": "Java",
          "url": "https://www.v2ex.com/go/java",
          "topics": 2629,
          "footer": "",
          "header": "The most popular programming language.",
          "title_alternative": "Java",
          "avatar_mini": "//cdn.v2ex.com/navatar/03af/dbd6/63_mini.png?m=1543386849",
          "stars": 3298,
          "root": false,
          "id": 63,
          "parent_node_name": "programming"
      },
      "member": {
          "username": "zgqq",
          "website": null,
          "github": null,
          "psn": null,
          "avatar_normal": "//cdn.v2ex.com/gravatar/c7d62b4bb8679d39b65f43964cd97ef0?s=24&d=retro",
          "bio": null,
          "url": "https://www.v2ex.com/u/zgqq",
          "tagline": null,
          "twitter": null,
          "created": 1482115792,
          "avatar_large": "//cdn.v2ex.com/gravatar/c7d62b4bb8679d39b65f43964cd97ef0?s=24&d=retro",
          "avatar_mini": "//cdn.v2ex.com/gravatar/c7d62b4bb8679d39b65f43964cd97ef0?s=24&d=retro",
          "location": null,
          "btc": null,
          "id": 206600
      },
      "last_reply_by": "adoui",
      "last_touched": 1567948181,
      "title": "下个版本的 Intellij IDEA 要起飞了",
      "url": "https://www.v2ex.com/t/598988",
      "created": 1567915985,
      "content": "性能提升，bug 修复的大版本，非常期待了\r\nhttps://blog.jetbrains.com/idea/2019/08/whats-next-intellij-idea-2019-3-roadmap/",
      "content_rendered": "<p>性能提升，bug 修复的大版本，非常期待了\n<a href=\"https://blog.jetbrains.com/idea/2019/08/whats-next-intellij-idea-2019-3-roadmap/\" rel=\"nofollow\">https://blog.jetbrains.com/idea/2019/08/whats-next-intellij-idea-2019-3-roadmap/</a></p>\n",
      "last_modified": 1567915985,
      "replies": 33,
      "id": 598988
  },
  {
      "node": {
          "avatar_large": "//cdn.v2ex.com/navatar/a3c6/5c29/108_large.png?m=1566353744",
          "name": "bb",
          "avatar_normal": "//cdn.v2ex.com/navatar/a3c6/5c29/108_normal.png?m=1566353744",
          "title": "宽带症候群",
          "url": "https://www.v2ex.com/go/bb",
          "topics": 6444,
          "footer": "",
          "header": "网速很重要。比快更快。",
          "title_alternative": "Broadband Symptom Complex",
          "avatar_mini": "//cdn.v2ex.com/navatar/a3c6/5c29/108_mini.png?m=1566353744",
          "stars": 3543,
          "root": false,
          "id": 108,
          "parent_node_name": "geek"
      },
      "member": {
          "username": "bullettrain1433",
          "website": "https://www.flyada.com/",
          "github": "Bullettrain",
          "psn": "bullettrain1433",
          "avatar_normal": "//cdn.v2ex.com/avatar/2feb/75fc/60146_mini.png?m=1438423022",
          "bio": "",
          "url": "https://www.v2ex.com/u/bullettrain1433",
          "tagline": "",
          "twitter": "",
          "created": 1397198194,
          "avatar_large": "//cdn.v2ex.com/avatar/2feb/75fc/60146_mini.png?m=1438423022",
          "avatar_mini": "//cdn.v2ex.com/avatar/2feb/75fc/60146_mini.png?m=1438423022",
          "location": "合肥",
          "btc": "",
          "id": 60146
      },
      "last_reply_by": "isukkaw",
      "last_touched": 1567948595,
      "title": "刚刚成功把群晖作为单口旁路由，分享下",
      "url": "https://www.v2ex.com/t/598954",
      "created": 1567905655,
      "content": "不得不说，218+做旁路由性能还是不错，秒杀路由器\r\n\r\n\r\n[分享地址]( https://www.flyada.com/2019/09/07/%E7%BE%A4%E6%99%96ds218+%E6%97%81%E8%B7%AF%E7%94%B1%E5%AE%9E%E6%88%98/)",
      "content_rendered": "<p>不得不说，218+做旁路由性能还是不错，秒杀路由器</p>\n<p><a href=\"https://www.flyada.com/2019/09/07/%E7%BE%A4%E6%99%96ds218+%E6%97%81%E8%B7%AF%E7%94%B1%E5%AE%9E%E6%88%98/\" rel=\"nofollow\">分享地址</a></p>\n",
      "last_modified": 1567905655,
      "replies": 32,
      "id": 598954
  },
  {
      "node": {
          "avatar_large": "//cdn.v2ex.com/navatar/b6d7/67d2/22_large.png?m=1566169867",
          "name": "macos",
          "avatar_normal": "//cdn.v2ex.com/navatar/b6d7/67d2/22_normal.png?m=1566169867",
          "title": "macOS",
          "url": "https://www.v2ex.com/go/macos",
          "topics": 13150,
          "footer": "<a href=\"/mbp\">MacBook Pro</a> 及 <a href=\"/go/imac\">iMac</a> 等 <a href=\"/go/apple\">Apple</a> 公司设计的计算机所运行的操作系统。<a href=\"/go/idev\">iOS</a> 的基础。",
          "header": "The world’s most advanced desktop operating system.",
          "title_alternative": "macOS",
          "avatar_mini": "//cdn.v2ex.com/navatar/b6d7/67d2/22_mini.png?m=1566169867",
          "stars": 3483,
          "root": false,
          "id": 22,
          "parent_node_name": "os"
      },
      "member": {
          "username": "f1ynnv2",
          "website": null,
          "github": null,
          "psn": null,
          "avatar_normal": "//cdn.v2ex.com/gravatar/28984556f4705845f61d1b36bbacf534?s=24&d=retro",
          "bio": null,
          "url": "https://www.v2ex.com/u/f1ynnv2",
          "tagline": null,
          "twitter": null,
          "created": 1502296833,
          "avatar_large": "//cdn.v2ex.com/gravatar/28984556f4705845f61d1b36bbacf534?s=24&d=retro",
          "avatar_mini": "//cdn.v2ex.com/gravatar/28984556f4705845f61d1b36bbacf534?s=24&d=retro",
          "location": null,
          "btc": null,
          "id": 247798
      },
      "last_reply_by": "NG6",
      "last_touched": 1567948670,
      "title": "macOS 现在已经不能再安装 Tampermonkey 了，已经安装过的且用且珍惜吧",
      "url": "https://www.v2ex.com/t/598952",
      "created": 1567904993,
      "content": "刚刚新装了一台 Macmini，想装 Tampermonkey，其官网的所谓下载链接，其实是直接跳转到苹果的 safari extension gallery 网址，但是苹果的这个页面是直接调用本机的 App Store。结果，App Store 里其实根本找不到 Tampermonkey。\r\n\r\napp store 账号试了中区和美区，都没有 Tampermonkey。\r\n\r\n新的 macmini 是 10.14.6，以及之前装过 Tampermonkey 的一台 mba 现在也无法更新 Tampermonkey。据说以后 safari 13 里也不让用了。难道是现在提前下手了？",
      "content_rendered": "刚刚新装了一台 Macmini，想装 Tampermonkey，其官网的所谓下载链接，其实是直接跳转到苹果的 safari extension gallery 网址，但是苹果的这个页面是直接调用本机的 App Store。结果，App Store 里其实根本找不到 Tampermonkey。<br /><br />app store 账号试了中区和美区，都没有 Tampermonkey。<br /><br />新的 macmini 是 10.14.6，以及之前装过 Tampermonkey 的一台 mba 现在也无法更新 Tampermonkey。据说以后 safari 13 里也不让用了。难道是现在提前下手了？",
      "last_modified": 1567904993,
      "replies": 31,
      "id": 598952
  },
  {
      "node": {
          "avatar_large": "//cdn.v2ex.com/navatar/6512/bd43/11_large.png?m=1565972785",
          "name": "linux",
          "avatar_normal": "//cdn.v2ex.com/navatar/6512/bd43/11_normal.png?m=1565972785",
          "title": "Linux",
          "url": "https://www.v2ex.com/go/linux",
          "topics": 5096,
          "footer": "",
          "header": "Linux is a Unix-like computer operating system assembled under the model of free and open source software development and distribution.",
          "title_alternative": "Linux",
          "avatar_mini": "//cdn.v2ex.com/navatar/6512/bd43/11_mini.png?m=1565972785",
          "stars": 4733,
          "root": false,
          "id": 11,
          "parent_node_name": "os"
      },
      "member": {
          "username": "blueberryman",
          "website": null,
          "github": null,
          "psn": null,
          "avatar_normal": "//cdn.v2ex.com/gravatar/0e3c2ace088e9d0fd3cf69a026211e59?s=24&d=retro",
          "bio": null,
          "url": "https://www.v2ex.com/u/blueberryman",
          "tagline": null,
          "twitter": null,
          "created": 1560478472,
          "avatar_large": "//cdn.v2ex.com/gravatar/0e3c2ace088e9d0fd3cf69a026211e59?s=24&d=retro",
          "avatar_mini": "//cdn.v2ex.com/gravatar/0e3c2ace088e9d0fd3cf69a026211e59?s=24&d=retro",
          "location": null,
          "btc": null,
          "id": 421642
      },
      "last_reply_by": "reus",
      "last_touched": 1567942468,
      "title": "ubuntu18.04 分 10Gboot 还不够吗",
      "url": "https://www.v2ex.com/t/599051",
      "created": 1567933769,
      "content": "我昨天刚安装的，现在提示就剩 500m 了，我按了百度云，网易云，wps，beyondcompare，连 ssr 还没弄呢，痹了狗了，咋回事嘞",
      "content_rendered": "<p>我昨天刚安装的，现在提示就剩 500m 了，我按了百度云，网易云，wps，beyondcompare，连 ssr 还没弄呢，痹了狗了，咋回事嘞</p>\n",
      "last_modified": 1567933769,
      "replies": 28,
      "id": 599051
  }
];

let random_joke_call_count = 0;

export default {
  "GET /dev/random_joke": function(req, res) {
    const responseObj = random_jokes[random_joke_call_count % random_jokes.length];
    random_joke_call_count += 1;
    setTimeout(() => {
      res.json(responseObj);
    }, 3000);
  },

  // "GET /dev/posts/1": function(req, res) {
  //   res.json(v2ex_posts);
  // },
  'GET /dev/poosts/:id/': function(req,res) {
    const post = v2ex_posts[req.params.id];
    res.json(post);
  },

  'GET /dev/posts/': function(req,res) {
    const {id} = req.query;
    const post = v2ex_posts[parseInt(id)];
    res.json(post);
  },

  'POST /dev/posts/': function(req, res) {
    const {id} = req.body;
    const post = v2ex_posts[parseInt(id)]; 
    res.json(post);
  }
};