This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
refoodify
├─ .eslintrc.json
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     └─ heads
│  │        └─ master
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ 4145cddf3f9db91b57b9cb596683c8eb420862
│  │  ├─ 07
│  │  │  └─ 678489e57d926cd5451e598bbbdad61434ab55
│  │  ├─ 0a
│  │  │  └─ 2169bc0802baf2ab8af1264d588caca6ca236b
│  │  ├─ 1a
│  │  │  └─ 69fd2a450afc3bf47e08b22c149190df0ffdb4
│  │  ├─ 1b
│  │  │  └─ 62daacff96dad6584e71cd962051b82957c313
│  │  ├─ 26
│  │  │  └─ b002aac1dd16944711b3be495a9e529dd68c20
│  │  ├─ 37
│  │  │  └─ 224185490e6db2d26a574d66d4d476336bf644
│  │  ├─ 4d
│  │  │  └─ 4cafe35c822bd73fa2e1a64a6282319cc5e533
│  │  ├─ 51
│  │  │  └─ 74b28c565c285e3e312ec5178be64fbeca8398
│  │  ├─ 56
│  │  │  └─ 7f17b0d7c7fb662c16d4357dd74830caf2dccb
│  │  ├─ 58
│  │  │  └─ a30bb0534205adbf5d8997cba342d767b972f0
│  │  ├─ 6b
│  │  │  └─ 717ad346d3dff8914e9545038c799226d59c89
│  │  ├─ 71
│  │  │  └─ 8d6fea4835ec2d246af9800eddb7ffb276240c
│  │  ├─ 77
│  │  │  └─ 053960334e2e34dc584dea8019925c3b4ccca9
│  │  ├─ 90
│  │  │  └─ 07252c56852fbbdfe53e803bbdb45645efafa2
│  │  ├─ a3
│  │  │  └─ 6cde01c60b91e16e4c976d00546686e2d4e470
│  │  ├─ b2
│  │  │  └─ b2a44f6ebc70c450043c05a002e7a93ba5d651
│  │  ├─ c8
│  │  │  └─ 8f389de09f418da376598c42e8788d4fb6d172
│  │  ├─ d2
│  │  │  └─ bf47453bb4634526b852abaf006d759895e5c3
│  │  ├─ d4
│  │  │  └─ 3da912d03f9355f1cf2a863c83d092d9b82797
│  │  ├─ d8
│  │  │  └─ b93235f205efbea6e8fceb1c9ddb57ddddf28d
│  │  ├─ e2
│  │  │  └─ 15bc4ccf138bbc38ad58ad57e92135484b3c0f
│  │  ├─ e9
│  │  │  └─ ffa3083ad279ecf95fd8eae59cb253e9a539c4
│  │  ├─ f2
│  │  │  └─ ae185cbfd16946a534d819e9eb03924abbcc49
│  │  ├─ fc
│  │  │  └─ b741a341df889205f9868e01cdef51cc530ae9
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ master
│     └─ tags
├─ .gitignore
├─ app
│  ├─ favicon.ico
│  ├─ firebase
│  │  └─ config.js
│  ├─ fonts
│  │  ├─ GeistMonoVF.woff
│  │  └─ GeistVF.woff
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ signup
│     └─ page.tsx
├─ components
│  ├─ image-slider.tsx
│  ├─ landing-page.tsx
│  ├─ leaderboard.tsx
│  ├─ navbar.tsx
│  ├─ reviews.tsx
│  └─ ui
│     ├─ animated-modal.tsx
│     ├─ avatar.tsx
│     ├─ badge.tsx
│     ├─ button.tsx
│     ├─ card.tsx
│     ├─ checkbox.tsx
│     ├─ input.tsx
│     ├─ label.tsx
│     └─ progress.tsx
├─ components.json
├─ lib
│  └─ utils.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ img (1).jpg
│  ├─ img (1).png
│  ├─ img (2).jpg
│  ├─ img (3).jpg
│  ├─ img (4).jpg
│  ├─ img (5).jpg
│  ├─ img (6).jpg
│  ├─ img (7).jpg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ tailwind.config.ts
└─ tsconfig.json

```
```
refoodify
├─ .eslintrc.json
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     └─ heads
│  │        └─ master
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ 4145cddf3f9db91b57b9cb596683c8eb420862
│  │  ├─ 07
│  │  │  └─ 678489e57d926cd5451e598bbbdad61434ab55
│  │  ├─ 0a
│  │  │  └─ 2169bc0802baf2ab8af1264d588caca6ca236b
│  │  ├─ 1a
│  │  │  └─ 69fd2a450afc3bf47e08b22c149190df0ffdb4
│  │  ├─ 1b
│  │  │  └─ 62daacff96dad6584e71cd962051b82957c313
│  │  ├─ 26
│  │  │  └─ b002aac1dd16944711b3be495a9e529dd68c20
│  │  ├─ 37
│  │  │  └─ 224185490e6db2d26a574d66d4d476336bf644
│  │  ├─ 4d
│  │  │  └─ 4cafe35c822bd73fa2e1a64a6282319cc5e533
│  │  ├─ 51
│  │  │  └─ 74b28c565c285e3e312ec5178be64fbeca8398
│  │  ├─ 56
│  │  │  └─ 7f17b0d7c7fb662c16d4357dd74830caf2dccb
│  │  ├─ 58
│  │  │  └─ a30bb0534205adbf5d8997cba342d767b972f0
│  │  ├─ 6b
│  │  │  └─ 717ad346d3dff8914e9545038c799226d59c89
│  │  ├─ 71
│  │  │  └─ 8d6fea4835ec2d246af9800eddb7ffb276240c
│  │  ├─ 77
│  │  │  └─ 053960334e2e34dc584dea8019925c3b4ccca9
│  │  ├─ 90
│  │  │  └─ 07252c56852fbbdfe53e803bbdb45645efafa2
│  │  ├─ a3
│  │  │  └─ 6cde01c60b91e16e4c976d00546686e2d4e470
│  │  ├─ b2
│  │  │  └─ b2a44f6ebc70c450043c05a002e7a93ba5d651
│  │  ├─ c8
│  │  │  └─ 8f389de09f418da376598c42e8788d4fb6d172
│  │  ├─ d2
│  │  │  └─ bf47453bb4634526b852abaf006d759895e5c3
│  │  ├─ d4
│  │  │  └─ 3da912d03f9355f1cf2a863c83d092d9b82797
│  │  ├─ d8
│  │  │  └─ b93235f205efbea6e8fceb1c9ddb57ddddf28d
│  │  ├─ e2
│  │  │  └─ 15bc4ccf138bbc38ad58ad57e92135484b3c0f
│  │  ├─ e9
│  │  │  └─ ffa3083ad279ecf95fd8eae59cb253e9a539c4
│  │  ├─ f2
│  │  │  └─ ae185cbfd16946a534d819e9eb03924abbcc49
│  │  ├─ fc
│  │  │  └─ b741a341df889205f9868e01cdef51cc530ae9
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ master
│     └─ tags
├─ .gitignore
├─ app
│  ├─ context
│  │  └─ AuthContext.tsx
│  ├─ favicon.ico
│  ├─ firebase
│  │  └─ config.js
│  ├─ fonts
│  │  ├─ GeistMonoVF.woff
│  │  └─ GeistVF.woff
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ login
│  │  └─ page.tsx
│  ├─ page.tsx
│  └─ signup
│     └─ page.tsx
├─ components
│  ├─ image-slider.tsx
│  ├─ landing-page.tsx
│  ├─ leaderboard.tsx
│  ├─ navbar.tsx
│  ├─ reviews.tsx
│  └─ ui
│     ├─ animated-modal.tsx
│     ├─ avatar.tsx
│     ├─ badge.tsx
│     ├─ button.tsx
│     ├─ card.tsx
│     ├─ checkbox.tsx
│     ├─ input.tsx
│     ├─ label.tsx
│     └─ progress.tsx
├─ components.json
├─ lib
│  └─ utils.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ img (1).jpg
│  ├─ img (1).png
│  ├─ img (2).jpg
│  ├─ img (3).jpg
│  ├─ img (4).jpg
│  ├─ img (5).jpg
│  ├─ img (6).jpg
│  ├─ img (7).jpg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ tailwind.config.ts
└─ tsconfig.json

```
```
refoodify
├─ .eslintrc.json
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     └─ heads
│  │        └─ master
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ 4145cddf3f9db91b57b9cb596683c8eb420862
│  │  ├─ 07
│  │  │  └─ 678489e57d926cd5451e598bbbdad61434ab55
│  │  ├─ 0a
│  │  │  └─ 2169bc0802baf2ab8af1264d588caca6ca236b
│  │  ├─ 1a
│  │  │  └─ 69fd2a450afc3bf47e08b22c149190df0ffdb4
│  │  ├─ 1b
│  │  │  └─ 62daacff96dad6584e71cd962051b82957c313
│  │  ├─ 26
│  │  │  └─ b002aac1dd16944711b3be495a9e529dd68c20
│  │  ├─ 37
│  │  │  └─ 224185490e6db2d26a574d66d4d476336bf644
│  │  ├─ 4d
│  │  │  └─ 4cafe35c822bd73fa2e1a64a6282319cc5e533
│  │  ├─ 51
│  │  │  └─ 74b28c565c285e3e312ec5178be64fbeca8398
│  │  ├─ 56
│  │  │  └─ 7f17b0d7c7fb662c16d4357dd74830caf2dccb
│  │  ├─ 58
│  │  │  └─ a30bb0534205adbf5d8997cba342d767b972f0
│  │  ├─ 6b
│  │  │  └─ 717ad346d3dff8914e9545038c799226d59c89
│  │  ├─ 71
│  │  │  └─ 8d6fea4835ec2d246af9800eddb7ffb276240c
│  │  ├─ 77
│  │  │  └─ 053960334e2e34dc584dea8019925c3b4ccca9
│  │  ├─ 90
│  │  │  └─ 07252c56852fbbdfe53e803bbdb45645efafa2
│  │  ├─ a3
│  │  │  └─ 6cde01c60b91e16e4c976d00546686e2d4e470
│  │  ├─ b2
│  │  │  └─ b2a44f6ebc70c450043c05a002e7a93ba5d651
│  │  ├─ c8
│  │  │  └─ 8f389de09f418da376598c42e8788d4fb6d172
│  │  ├─ d2
│  │  │  └─ bf47453bb4634526b852abaf006d759895e5c3
│  │  ├─ d4
│  │  │  └─ 3da912d03f9355f1cf2a863c83d092d9b82797
│  │  ├─ d8
│  │  │  └─ b93235f205efbea6e8fceb1c9ddb57ddddf28d
│  │  ├─ e2
│  │  │  └─ 15bc4ccf138bbc38ad58ad57e92135484b3c0f
│  │  ├─ e9
│  │  │  └─ ffa3083ad279ecf95fd8eae59cb253e9a539c4
│  │  ├─ f2
│  │  │  └─ ae185cbfd16946a534d819e9eb03924abbcc49
│  │  ├─ fc
│  │  │  └─ b741a341df889205f9868e01cdef51cc530ae9
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ master
│     └─ tags
├─ .gitignore
├─ app
│  ├─ context
│  │  └─ AuthContext.tsx
│  ├─ favicon.ico
│  ├─ firebase
│  │  └─ config.js
│  ├─ fonts
│  │  ├─ GeistMonoVF.woff
│  │  └─ GeistVF.woff
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ login
│  │  └─ page.tsx
│  ├─ page.tsx
│  ├─ signup
│  │  └─ page.tsx
│  └─ welcome
│     └─ page.tsx
├─ components
│  ├─ image-slider.tsx
│  ├─ landing-page.tsx
│  ├─ leaderboard.tsx
│  ├─ navbar.tsx
│  ├─ reviews.tsx
│  └─ ui
│     ├─ animated-modal.tsx
│     ├─ avatar.tsx
│     ├─ badge.tsx
│     ├─ button.tsx
│     ├─ card.tsx
│     ├─ checkbox.tsx
│     ├─ input.tsx
│     ├─ label.tsx
│     └─ progress.tsx
├─ components.json
├─ lib
│  └─ utils.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ img (1).jpg
│  ├─ img (1).png
│  ├─ img (2).jpg
│  ├─ img (3).jpg
│  ├─ img (4).jpg
│  ├─ img (5).jpg
│  ├─ img (6).jpg
│  ├─ img (7).jpg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ tailwind.config.ts
└─ tsconfig.json

```