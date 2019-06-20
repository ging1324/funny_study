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