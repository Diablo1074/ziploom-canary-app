# ziploom-deploy-canary-app

Minimal Express app used to live-test ZipLoom's **VPS** deploy path
(`artifact_mode: app`), as distinct from `ziploom-deploy-canary`, which is a
static page and exercises `artifact_mode: static`.

Why this exists as its own repository:

- A VPS deploy runs the app in Docker and needs something that actually
  listens on a port. A static page would pass without testing that.
- It carries a real `package-lock.json`, so the dependency gate gets genuine
  lockfile coverage instead of reporting `none`.
- It has no `Dockerfile`, so ZipLoom's generated one is exercised.

Keep it boring. If a deploy of this fails, the fault should be in the deploy
path, not in the application.
