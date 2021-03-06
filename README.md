# Recuperação de senha

**RF (Requisitos funcionais)**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF (Requisitos não funcionais)**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar o Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN (Regras de negocio)**

- O link enviado por e-mail para resetar senha, deve expirar em x horas;
- O usuário precisa confirmar a nova senha ao resetar sua senha;


# Atualização do perfil

**RF (Requisitos funcionais)**

- O usuário deve poder atualizar seu nome, email e senha

**RNF (Requisitos não funcionais)**

- NDA

**RN (Regras de negocio)**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar sua senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar sua senha;

# Painel do prestador

**RF (Requisitos funcionais)**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF (Requisitos não funcionais)**

- Os agendamento do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas em MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.IO;

**RN (Regras de negocio)**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;


# Agendamento de serviços

**RF (Requisitos funcionais)**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF (Requisitos não funcionais)**

- A listagem de prestadores deve ser armazenada em cache;

**RN (Regras de negocio)**

- Cada agendamento deve durar 1h exatamento;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h)
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
