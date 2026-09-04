2026-09-03

# 03/09/2026

## Auditoria

Descoberto:

- user.service.js usava user.json
- auth.service.js usava users.json
- corrigido para users.json

- data.json não está sendo usado
- products.ts é legado

- products.json contém dados inválidos

Próximo passo:

- reconstruir User
- reconstruir Auth
- reconstruir Product