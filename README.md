# ReactJS_Study

- li

1. li
   ![image](src)
   [link](www.naver.com)

**strong**

```
function a(){
return 10
}
```

> p

# git 명령어

git status : 현재 레포지토리와 연결된 로컬의 파일이 무엇이 변경되었는지 알 수 있음

git add . : 로컬의 파일이 변경된 것을 추가함

2 단계 commit, push
local - 어딘가 - server
        (commit) (push)

git commit -m "메세지" : 커밋
git log : 로그확인
git push origin <branch> : 푸쉬

## branch
git checkout -b feature-add-text : -b 새로운 브런치 생성 및 이동
git checkout : 기존에 있는 브런치에 이동

## pull
git pull origin master : git 서버의 파일들을 로컬에 가져온다

## git 리모트 저장소 변경
git remote set-url origin https://github.com/user/repo2.git
```
