/*TMODJS:{"version":4,"md5":"b6ca52bc83b08c7b4b015b133ab6209c"}*/
template('syn_movie/movie_details',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,data=$data.data,$out='';$out+='<nav class="mui-bar mui-bar-tab movie_details_btn href_click" data-href="./cinema_select.html?movieid=';
$out+=$escape(data.movieDetail.id);
$out+='">选座购票</nav> <div id="movie_detail" class="mui-content "> <div class="mui-table-view-cell mui-media movie_details_top"> <img class="mui-media-object mui-pull-left" src="';
$out+=$escape(data.movieDetail.path_vertical_s);
$out+='"> <div class="mui-media-body"> <h4>';
$out+=$escape(data.movieDetail.movie_name);
$out+='</h4> <p>导演：<span>';
$out+=$escape(data.movieDetail.director);
$out+='</span></p> <p class="mui-ellipsis">主演：<span>';
$out+=$escape(data.movieDetail.actor);
$out+='</span></p> <p class="mui-ellipsis">';
$out+=$escape(data.movieDetail.movie_type);
$out+='|<span>';
$out+=$escape(data.movieDetail.movie_length);
$out+='</span></p> <p>';
$out+=$escape(data.movieDetail.publish_time);
$out+='</p> <div class="star_pinfen"> <span class="star_pinfen1"></span> </div> <span class="star_pinfenNum">';
$out+=$escape(data.movieDetail.score);
$out+='</span> </div> </div>  <div> <p class="movie_xianqing"> ';
$out+=$escape(data.movieDetail.intro);
$out+=' </p> </div>  </div> <script> jQuery(\'.movie_details_top\').css(\'background-image\',\'url(\'+jQuery(\'.movie_details_top img\').attr(\'src\')+\')\'); jQuery(\'.star_pinfen1\').css(\'width\',parseInt(';
$out+=$escape(data.movieDetail.score);
$out+=')*10+\'%\'); </script>';
return new String($out);
});