import { Router } from "express";
import express from "express";
import cookieparser from "cookie-parser";

const router = Router();

const users = [
  { id: 1, name: "Franco", email: "Franco@mail.com", password: "1234" },
  { id: 2, name: "Toni", email: "Toni@mail.com", password: "1234" },
];

router.use(cookieparser());
router.use(express.urlencoded({ extended: true }));
router.use((req, res, next) => {
  next();
});

const isAuthenticated = (req, res, next) => {
  const { userId } = req.cookies;
  const user = users.find((user) => user.id.toString() == userId);
  if (user) return res.redirect("/auth/home");
  next();
};

const isNotAuthenticated = (req, res, next) => {
  const { userId } = req.cookies;
  const user = users.find((user) => user.id.toString() == userId);
  if (!user) return res.redirect("/auth/login");
  next();
};

router.get("/auth", (req, res) => {
  const { userId } = req.cookies;
  res.send(`
      <h1>Bienvenidos a Disney API!</h1>
      ${
        userId
          ? `
      <a href='/auth/home'>Perfil</a>
      <form method="post" action="/auth/logout">
        <button>Salir</button>
      </form>
      `
          : `
      <a href='/auth/login'>Ingresar</a>
      <a href='/auth/register'>Registrarse</a>
      `
      }
    `);
});

router.get("/auth/register", isAuthenticated, (req, res) => {
  res.send(`
    <h1>Registrarse</h1>
    <form method="post" action="/auth/register">
      <input name='name' placeholder='Nombre' required />
      <input type='email' name='email' placeholder='Email' required />
      <input type='password' name='password' placeholder='Contraseña' required />
      <input type="submit" value='Registrarse' />
    </form>
    <a href='/auth/login'>Iniciar sesión</a>
    `);
});

router.get("/auth/login", isAuthenticated, (req, res) => {
  res.send(`
      <h1>Iniciar sesión</h1>
      <form method="post" action="/auth/login">
        <input type='email' name='email' placeholder='Email' required />
        <input type='password' name='password' placeholder='Contraseña' required />
        <input type="submit" value='Ingresar' />
      </form>
      <a href='/auth/register'>Registrarse</a>
    `);
});

router.get("/auth/home", isNotAuthenticated, (req, res) => {
  const { userId } = req.cookies;
  const user = users.find((user) => user.id.toString() == userId);
  res.send(`
      <h1>Bienvenido ${user.name}</h1>
      <h4>${user.email}</h4>
      <a href='/auth'>Inicio</a>
    `);
});

router.post("/auth/register", (req, res) => {
  const { name, email, password } = req.body;
  const user = users.find((user) => user.email === email);
  if (user || !name || !email || !password) {
    res.redirect("/auth/register");
  } else {
    users.push({
      id: users.length + 1,
      name,
      email,
      password,
    });
    res.redirect("/auth");
  }
});

router.post("/auth/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (user?.id) {
    res.cookie("userId", user.id);
    res.redirect("/auth/home");
  } else {
    res.redirect("/auth/login");
  }
});

router.post("/auth/logout", (req, res) => {
  res.clearCookie("userId");
  res.redirect("/auth");
});

export default router;
