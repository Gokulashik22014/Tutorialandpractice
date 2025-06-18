# 🚀 Node.js + TypeScript Setup Guide

A quick and efficient setup for running a **TypeScript Express server** using modern tools like `tsx` and proper type declarations.

---

## 🛠 Initial Project Setup

```bash
npm init -y
npm install --save-dev typescript @types/node
```

---

## 🔍 Check Installed Versions

```bash
npx tsc -v   # TypeScript Version → 5.8.3
node -v      # Node Version → v20.17.0
```

---

## 📦 Install Node 20 TypeScript Config

```bash
npm install --save-dev @tsconfig/node20
```

---

## 🧠 Create `tsconfig.json`

```json
{
  "extends": "@tsconfig/node20/tsconfig.json",
  "compilerOptions": {
    "outDir": "dist",
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

---

## 🏗 Build and Run

### 🔨 Compile TypeScript

```bash
npx tsc
```

### ▶ Run the Compiled JS File

```bash
node dist/server.js
```

---

## ⚡ Use `tsx` for Instant Development

```bash
npm install --save-dev tsx
```

### Update `package.json` Scripts

```json
{
  "scripts": {
    "build": "tsc && node dist/server.js",
    "start": "tsx watch src/server.ts"
  }
}
```

---

## 📚 Install Express with Types

```bash
npm install --save express
npm install --save-dev @types/express
```

---

## 🏁 You're all set!

Now you can start your server using:

```bash
npm run start
```

Or build and run the compiled version using:

```bash
npm run build
```
