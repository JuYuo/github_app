<template>
  <div id="app">
    <nav class="navbar navbar-inverse ">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">book-shop</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><router-link to="/">首页</router-link></li>
        <li><router-link to="/about">关于我</router-link></li>
        <li class="dropdown">
          <a href="#/list" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">书籍分类 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#/list">历史</a></li>
            <li><a href="#/list/wenxue">文学</a></li>
            <li><a href="#/list/dongman">动漫</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->

  </div><!-- /.container-fluid -->
</nav>
    <div>
      <router-view></router-view>
    </div>
  </div>
  
</template>




    