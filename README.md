## 해야할것


`signup` 페이지와 `login`페이지가 구현되어있어요 각각
http://localhost:3000/signup
http://localhost:3000/login
에서 접근 가능합니다.

여기에서(프론트엔드) 사용자가 폼을 입력하면 backend인  `api/auth.ts`에서 적적하게 반응 해주어야 합니다.

1. `prisma/schema.prisma` 에 적절한 `User` 모델을 추가해주세요
    - **힌트:** signup에서 입력 받는 항목들이 모델에 들어가야 겠죠??
2. `auth.ts`를 구현하세요
   - 이 곳에서는 사용자가 login을 하려고 하는지, signup을 해야하는지에 따라서 다르게 작동해야 합니다. 해당 코드에 주석으로 설명이 되어있어요.

회원 가입시에는 새로운 `User`를 `create`하면 됩니다 해당 내용은 아래 링크에 있어요
https://www.prisma.io/docs/concepts/components/prisma-client/crud#create

로그인 시에는 데이터베이스에서 그 email를 가지는 유저가 있는지, 그 유적 있다면 비밀번호는 일치하는지 확인하면됩니다. 해당 내용은 아래 `findUnique`를 보시면 될것 같아요
https://www.prisma.io/docs/reference/api-reference/prisma-client-reference

`findUnique`를 통해 그 유저를 가져온 후 데이터베이스에 있는 비밀번호와 폼에서 입력받은 비밀번호가 일치하는지 확인하시면 됩니다!

막히시면 바로 저에게 질문하세요!
