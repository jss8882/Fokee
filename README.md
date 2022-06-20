## 해야할것

`signup` 페이지와 `login`페이지가 구현되어있어요 각각
http://localhost:3000/signup
http://localhost:3000/login
에서 접근 가능합니다.

여기에서(프론트엔드) 사용자가 폼을 입력하면 backend인 `api/auth.ts`에서 적적하게 반응 해주어야 합니다.

1. `prisma/schema.prisma` 에 적절한 `User` 모델을 추가해주세요

   - **힌트:** signup에서 입력 받는 항목들이 모델에 들어가야 겠죠??
   - schema를 수정한 후에 아래 명령어를 입력하여 모델을 생성해야한다.

   ```shell
     npx prisma db push
     #이렇게 나오면 성공입니다. Generated Prisma Client (3.14.0 | library
   ```

2. `auth.ts`를 구현하세요
   - 이 곳에서는 사용자가 login을 하려고 하는지, signup을 해야하는지에 따라서 다르게 작동해야 합니다. 해당 코드에 주석으로 설명이 되어있어요.

```javascript
// 회원가입 요청인경우 (login값이 false)
// {
//     email: 'jss8882@unist.ac.kr',
//     password: '12341234',
//     passwordCheck: '12341234',
//     firstName: '장',
//     lastName: '상수',
//     position: '학생',
//     login: false
//   }
////비밀번호와 비밀번호 확인이 같은지 비교한다
//////틀리면 바로 return
//////같으면 아래를 수행
////////Prisma에 새로운 USER를 추가한다.

//로그인 요청인 경우(login 값이 true)
// { email: 'jss8882@unist.ac.kr', password: '12341234', login: true }
////해당 이메일 가진 유저가 데이터베이스에 있는지 체크
/////없으면 return res.json({ok:false, error:"no user please signup first"})
/////있으면 비밀번호 가 동일한지 체크
//////동일하면 return res.json({ok:true,error:"we are now logged in"})
//////비밀번호가 다르면 return res.json({ok:false, error:"wrong password"})
```

회원 가입시에는 새로운 `User`를 `create`하면 됩니다 해당 내용은 아래 링크에 있어요
https://www.prisma.io/docs/concepts/components/prisma-client/crud#create

로그인 시에는 데이터베이스에서 그 email를 가지는 유저가 있는지, 그 유적 있다면 비밀번호는 일치하는지 확인하면됩니다. 해당 내용은 아래 `findUnique`를 보시면 될것 같아요
https://www.prisma.io/docs/reference/api-reference/prisma-client-reference

`findUnique`를 통해 그 유저를 가져온 후 데이터베이스에 있는 비밀번호와 폼에서 입력받은 비밀번호가 일치하는지 확인하시면 됩니다!

막히시면 바로 저에게 질문하세요!
