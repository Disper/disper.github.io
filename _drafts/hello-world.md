---
layout: post
title: "Top 8 things that I like the most in Jekyll"
date:   2015-04-11 13:27:16
comments: true
categories: programming 
---

For quite some time I was thinking about creating a blog but I didn't want to use any of the complex CMS platforms such as Wordpress. [Friend of mine, kamkor](http://blog.kamkor.me/) recently started a blog using Jekyll and I fallen in love in it after I played with it.

Now I would like to list things that I love the most:

###1. Easy to setup locally 
If you already have Ruby, RubyGems, NodeJS and (l)unix like operating system, then you just need to type few commands to install jekyll, generate a website and set it running:

{% highlight bash %}
gem install jekyll
jekyll new my-awesome-site
cd my-awesome-site
jekyll serve
{% endhighlight %}

and you're ready to go:

`Server address: http://127.0.0.1:4000/`

###2. Beautifully simple
If you run `tree` command in your newly created my-awesome-site directory you can see it's content:

{% highlight bash %}
.
├── about.md
├── _config.yml
├── css
│   └── main.scss
├── feed.xml
├── _includes
│   ├── footer.html
│   ├── header.html
│   └── head.html
├── index.html
├── _layouts
│   ├── default.html
│   ├── page.html
│   └── post.html
├── _posts
│   └── 2015-04-11-welcome-to-jekyll.markdown
└── _sass
    ├── _base.scss
        ├── _layout.scss
	    └── _syntax-highlighting.scss

5 directories, 15 files
{% endhighlight %}
Everything is in place. Bare minimum that you can easly customize. Compare it to freshly extracted wordpress which have 121 directories and 1184 files.

###3. It's commandlineable
Ok, there is no such a word... at least for now :). Basically what I meant is that you can create and publish your post with command line tools **git** (we will dive into that later) and **your favorite text editor** (in my case [`vim`](http://www.vim.org) + [`vim-markdown`](https://github.com/plasticboy/vim-markdown) plugin works perfectly).   

###4. Uses Sass 
[Sass](http://sass-lang.com/), using the words of it's creators is:

 > the most mature, stable, and powerful professional grade CSS extension language in the world.


###5. Uses markdown 
Markdown is simple, yet very powerfull markup language which can be converted to HTML (like jekyll does) or to other formats. It is widelly used in sites such as [GitHub](https://github.com/), [StackOverflow](http://stackoverflow.com/) or [Atlassian](www.atlassian.com/).

Take a look how this paragraph look  markdown right in my vim editor: 
![vim-markdown-plugin]({{ site.url }}/assets/vim-markdown-plugin.png)

###6. You can easly deploy it on GitHub for free
1. Create a git repository that will contain your-awesome-site
2. Open Settings and change repository name to **YOUR-GIT-ACCOUNT-NAME**.github.io 
3. Push your site to the repository

Now just give GitHub a moment and you're done! If you want to make any changes to your site just push them to your GitHub repository and GitHub will take care of the rest.

###7. Awesome code highlighter available out-of-the-box
Creating a technical blog without syntax highlighting make sense only if you want to annoy your readers or make their eyes hurt. Jekyll can use Pygments(default) or Rouge for generic syntax highlighting. [Pygments can highlight more than 300 languages](http://pygments.org/languages/) so rest assured that your code will be in readible format, without any additional configuration.

If you want to highlight some code just put it between `{{ "{% highlight java "}} %}` and `{{ "{% endhighlight"}} %}` tags. Here's simple code snippet that uses java highlighter:

{% highlight java %}
System.out.println("Hello Jekyll, Hello pygments!");
{% endhighlight %}

###8. No database needed
In most cases bloggers are serving just plain, static content on their sites, yet they still have a database. Why? Because their Content Management System requires it. Don't get me wrong, they are cases when you might need it, e.g:

* Collecting email addresses
* Having restricted areas
* Storing survey results 

But if you don't need a database, then don't use one. Especially that it only adds another layer that needs to be secured.

###Conclusion
You should consider using Jekyll if you want to create a blog. It might not cover all CMS use cases, it might not have shiny WYSIWYG editor and store all kind of data in the database but it's simple and effective. It's all I need.  
