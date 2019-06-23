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
user_id : string
</pre>

<pre>
게시판 목록 조회
/boardList
</pre>

<pre>
게시판 상세 조회
/boardDetail?id=?
id : int
</pre>

<pre>
게시판 등록
/boardAdd
body{
    "user_id" : ?,
    "title" : ?,
    "content" : ?
}
user_id : int  
title : string  
content : steing  
</pre>