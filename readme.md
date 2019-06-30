funny_study 사용방법
=============
1. mysql 설치
+ DB정보는 node-server/db/mysql_info.js 에서 변경합니다.
+ 테이블 생성 코드는 문서 하단 참조.
2. node-server 이동 후 npm install 및 npm start 실행
3. funny_react/tutorial 이동 후 npm install 및 npm start 실행

* * *
user table
* * *
<pre>
CREATE TABLE `user_info` (
	`uid` INT(5) NOT NULL AUTO_INCREMENT,
	`user_id` VARCHAR(256) NOT NULL DEFAULT '0',
	`user_passwd` CHAR(50) NOT NULL DEFAULT '0',
	`user_name` VARCHAR(256) NOT NULL DEFAULT '0',
	`user_address` VARCHAR(256) NOT NULL DEFAULT '0',
	`user_birthday` VARCHAR(256) NOT NULL DEFAULT '0',
	`user_sex` VARCHAR(1) NOT NULL DEFAULT '0',
	`user_created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`uid`)
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=7
;
</pre>

* * *
board table
* * *
<pre>
CREATE TABLE `board_info` (
	`id` INT(5) NOT NULL AUTO_INCREMENT,
	`uid` INT(5) NOT NULL DEFAULT '0',
	`title` VARCHAR(256) NOT NULL DEFAULT '0',
	`content` LONGTEXT NULL,
	`reg_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`update_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=3
;
</pre>



* * *
funny_reacy/tutorial 에서 npm install 해주세요
+ query-string
+ react-slick  
slick slider 의 경우 옵션이 다양합니다.  
메인에 작성한 샘플은 극히 일부분 입니다.  
스타일 조정에 따라 완전히 다른 모습을 보여주기도 합니다.  
react-slick 설치관련 내용은  
https://react-slick.neostack.com/docs/get-started/  
을 참고하세요  
slick-slider 의 추가 설정이나 다른 디자인 등은  
https://kenwheeler.github.io/slick/  
을 참고하세요  

***
업데이트(작업한) 내용은 앞으로 이 영역에만 올릴게요 다른분들도 올려주세요
======
**2019-06-21**
<pre>
react에 slick-slider 를 적용했어요 김준호
</pre>
**2019-06-23**  
<pre>
vue에도 회원가입과 로그인을 적용했어요 김준호
react 에 CKEditor를 적용했어요 김준호
</pre>
**2019-06-24**
<pre>
vue 게시판 목록과 게시판 글 작성을 적용했어요 김준호
서버에서 게시판 목록 불러오기 할때 최신순으로 변경했어요 김준호
</pre>
**2019-06-26**
<pre>
React로 갤러리 만들기 시도해 봅니닷
아직은 단순 퍼블리싱 작업만 해놓은 상태입니다! 최은채
</pre>
**2019-06-30**
<pre>
게시판에 페이징이 추가되었습니다
서버쪽 게시판 조회 결과 형태가 변경되어 마스터에 gitpull 꼭 받고 본인들 브랜치에서 merge 해주세요
</pre>
***
CEKeitor에 대하여
=============
<pre>
ckeditor 적용에 대하여...  
ckeditor 적용 예제는 react 의 게시판 글작성 부분에 있습니다.  
boardAdd.js 파일입니다.  
옵션등은 기본으로 두었어요  
옵션에 대한 부분은 각자 찾아서 해보길 권합니다.  
해봐야 늘고 해봐야 알고... 
구글에서 ckeditor option 일라고만 쳐도 많아요   
<br/>
글작성 페이지를 보면 editor를 바로 받아오는게 아닌, state에 내용이 바뀔때마다 set 해주고 있어요  
이는 에디터의 elemenet 를 찾아가도 대상값을 받아올 수 없어서 그러는데요  
(뭣때문인지는 기억이 잘 안나네요)  
그래서 내용이 바뀔때마다 state에 값을 널어주고 최종적으로 저장 버튼을 누를 때 해당 값을 가져와서 사용합니다.
react 가 아닌 경우는 input type hidden 을 하나 만들고 해당 element 에 값을 넣어주겠죠. 그리고 그 값을 사용합니다.
</pre>
