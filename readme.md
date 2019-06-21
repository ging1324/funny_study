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
api 사용법
<pre>
로그인
/login?user_id=?&user_passwd=?
</pre>
<pre>
사용자 추가
/addUser
body
{
	"user_id": ?, 
	"user_passwd": ?,
	"user_name": ?,
	"user_address": ?,
	"user_birthday": ?,
	"user_sex": ?
	
}
</pre>
<pre>
사용자 조회
/userInfo?user_id=?
</pre>

<pre>
게시판 목록 조회
/boardList
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