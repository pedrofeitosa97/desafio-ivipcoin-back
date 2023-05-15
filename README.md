# Task Manager

A nossa API foi projetada para um sistema de gerenciamento de tarefas completo, permitindo cadastro de usuários, criação de tarefas de acordo com o usuário, edição e deleção de tarefas.

# Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```npm install```

# Documentação da API

### Endpoints

| Método   | Rota       | Descrição                               		 |
|----------|------------|--------------------------------------------------------|
| POST     | /users     | Criação de um usuário.                 		              |
| POST     | /login     | Login de usuário               		                      |
| POST     | /tasks/ | Criar uma tarefa                                           |
| GET      | /tasks/ | Lista todas as tarefas                                     |
| PATCH    | /tasks/:id | Edita uma tarefa pelo seu ID                            |
| GET      | /tasks/:id | Lista uma tarefa pelo ID do usuário                     |
| DELETE   | /tasks/:id | Deleta uma tarefa por ID                           |

### 1.1. **Criação de Usuário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:
```
POST /users
Host: https://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"name": "Pedro",
	"email": "pedrohenrique@mail.com",
	"password": "senha1234",
	"photoURL": "https://fortniteskins.net/wp-content/uploads/2022/11/cosmetics/7627ff722524e1c16c742f618761517d_Neymar_Jr_background.png"
}
```
### Exemplo de Response:
```
201 Created
```

```json
{
	"uid": "MIKBEQ62pcaOcEpK8G6SYL6cAhi1",
	"email": "pedrohx@mail.com",
	"emailVerified": false,
	"displayName": "Pedro",
	"isAnonymous": false,
	"photoURL": "https://fortniteskins.net/wp-content/uploads/2022/11/cosmetics/7627ff722524e1c16c742f618761517d_Neymar_Jr_background.png",
	"providerData": [
		{
			"providerId": "password",
			"uid": "pedrohx@mail.com",
			"displayName": "Pedro",
			"email": "pedrohx@mail.com",
			"phoneNumber": null,
			"photoURL": "https://fortniteskins.net/wp-content/uploads/2022/11/cosmetics/7627ff722524e1c16c742f618761517d_Neymar_Jr_background.png"
		}
	],
	"stsTokenManager": {
		"refreshToken": "APZUo0Tv9GDRVuNrr8P164acz4jwF_ROx57I_iIdIHtb6CVQwqjjKpEr1IQqK_3SQhHhMp0EcNFF4fjYirMhqQOMC_caODhh0W5FSyvWkQwp910k3StSzrjI1i2K7fNeHuppcH4-TQi2EmlYW71p6Jt7JbDXH6EoB7xhpir6JvFG7DmzAosYGGrddNDJPtn8JVR4cMettvjl9KwWdTbhZoZmttjev14Oqg",
		"accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFiYjI2MzY4YTNkMWExNDg1YmNhNTJiNGY4M2JkYjQ5YjY0ZWM2MmYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZGVzYWZpby1pdmlwY29pbiIsImF1ZCI6ImRlc2FmaW8taXZpcGNvaW4iLCJhdXRoX3RpbWUiOjE2ODQxMjEyMDcsInVzZXJfaWQiOiJNSUtCRVE2MnBjYU9jRXBLOEc2U1lMNmNBaGkxIiwic3ViIjoiTUlLQkVRNjJwY2FPY0VwSzhHNlNZTDZjQWhpMSIsImlhdCI6MTY4NDEyMTIwNywiZXhwIjoxNjg0MTI0ODA3LCJlbWFpbCI6InBlZHJvaHhAbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicGVkcm9oeEBtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gX_RJLjQduLUc4AdmGwg4dtGZklkt0x5Jl00lGYBvTeZIWjqeuyna4e-G-6CHjWQ6wCkIE5UnPSbaKSudK1YBLR9sqrqmj_Qh-TqMmRhQVOx5lTQliruLAuX8idSubumD5A1br3lADxZ90ECxGJLDNO0PAzN6WoiLk6MnaV2P0l6hnfgUvOTBCR8F6V7LFBkjIOZjx5nZFy6a0QlLlZaCuJhtIYSzF4H3DsGqUcTnla-Bm6s4lV-pB22MGB2ZRbz8HTfpJ8naYkvh-FxZzGH1H_SQcJhlek_KxPpiodpoiOjHAaesAFes2eW3FQuqej557EfHELhabh3jZUq38ndgg",
		"expirationTime": 1684124806566
	},
	"createdAt": "1684121207491",
	"lastLoginAt": "1684121207491",
	"apiKey": "AIzaSyARpLDnCMPNCe1ASQXDf4H2keWodSUh7dA",
	"appName": "[DEFAULT]"
}
```
### 1.2. **Login de usuário**

### `/login`

### Exemplo de Request:
```
POST /users
Host: https://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```
{
	"email": "pedrohenrique@mail.com",
	"password": "senha1234"
}
```
### Exemplo de Response:
```
200 OK
```
```json
{
	"uid": "rpiGJIDGmTS44pBedyDIlzqRoU33",
	"email": "pedrohenrique@mail.com",
	"emailVerified": false,
	"displayName": "Pedro",
	"isAnonymous": false,
	"photoURL": "https://fortniteskins.net/wp-content/uploads/2022/11/cosmetics/7627ff722524e1c16c742f618761517d_Neymar_Jr_background.png",
	"providerData": [
		{
			"providerId": "password",
			"uid": "pedrohenrique@mail.com",
			"displayName": "Pedro",
			"email": "pedrohenrique@mail.com",
			"phoneNumber": null,
			"photoURL": "https://fortniteskins.net/wp-content/uploads/2022/11/cosmetics/7627ff722524e1c16c742f618761517d_Neymar_Jr_background.png"
		}
	],
	"stsTokenManager": {
		"refreshToken": "APZUo0QVUJEyPhyrdU8sgrBmNIQdxUI0poVss4DYItHSaSCKWyQz7qp9Hga9_RGIUbIBUcF7Yhm3FeWiFQwf32tvC0tQn4Uf34TfVUylSGuKgXLXzaA_5hrlX5HQEgJXzR95jOA-C8jFEL4WxznCfvUkf2K36w7iKd9WgevjCKKAoDvDUug8ABk6oiePQSkXQ_A_3WV83v68DJJSxe3G7vWYSg7ogC5oqywfDimoazkNdw7WWzp7NQ0",
		"accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFiYjI2MzY4YTNkMWExNDg1YmNhNTJiNGY4M2JkYjQ5YjY0ZWM2MmYiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUGVkcm8iLCJwaWN0dXJlIjoiaHR0cHM6Ly9mb3J0bml0ZXNraW5zLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAyMi8xMS9jb3NtZXRpY3MvNzYyN2ZmNzIyNTI0ZTFjMTZjNzQyZjYxODc2MTUxN2RfTmV5bWFyX0pyX2JhY2tncm91bmQucG5nIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2Rlc2FmaW8taXZpcGNvaW4iLCJhdWQiOiJkZXNhZmlvLWl2aXBjb2luIiwiYXV0aF90aW1lIjoxNjg0MTIxMjgxLCJ1c2VyX2lkIjoicnBpR0pJREdtVFM0NHBCZWR5RElsenFSb1UzMyIsInN1YiI6InJwaUdKSURHbVRTNDRwQmVkeURJbHpxUm9VMzMiLCJpYXQiOjE2ODQxMjEyODEsImV4cCI6MTY4NDEyNDg4MSwiZW1haWwiOiJwZWRyb2hlbnJpcXVlQG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInBlZHJvaGVucmlxdWVAbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.pOJQY2AmwkRdRhbf5ovU1e4aUJPnoF-z2rYXnGjMbL1ZbAFBapyjEa1_WS4Wd1IZmvSpqtZGhbmlPdoab1cheviho6ZjnCA2ngAPmj90plrLj6dr8IKgOUbFJIqD8utRWtmef1drBq1E6x1NjwSaR5o2-l4bJQnciqJpiCvlbElls2qKkQ6ICuKgsIWotrRnEQdEu9tS61j3ocWNYXQl26aafbhvcKdKDgtzLTAVnzyojKRH_b1g7m8a-veKQGEk3Ndb2b2kyXkN4vH1GQmEKq9bZL4sy9wLV08LSjf4jTPKup3GlVB_StGyljFLKU3XJkYKAqgIe8AHJxZpO-WGIA",
		"expirationTime": 1684124880515
	},
	"createdAt": "1684082339931",
	"lastLoginAt": "1684121281655",
	"apiKey": "AIzaSyARpLDnCMPNCe1ASQXDf4H2keWodSUh7dA",
	"appName": "[DEFAULT]"
}
```

### 1.3. **Criação de tarefas**

### `/tasks`

### Exemplo de Request:
```
POST /tasks
Host: https://localhost:3000
Authorization: Bearer Token Admin
Content-type: application/json
```

### Corpo da Requisição:
```
{
	"title": "Almoçar",
	"description": "Salve galera"
}
```
### Exemplo de Response:
```
200 OK
```
```json
{
	"id": "ZEY1z2pvCbu5ODe29QQM",
	"title": "Almoçar",
	"description": "Salve galera",
	"owner": {
		"user_id": "rpiGJIDGmTS44pBedyDIlzqRoU33",
		"username": "Pedro"
	},
	"created_at": "2023-05-15T01:48:00.630Z"
}
```
### 1.4. **Listando todas as tarefas**

### `/tasks`

### Exemplo de Request:
```
GET /tasks
Host: https://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```
### Exemplo de Response:
```
200 OK
```
```json
[
	{
		"id": "04WIpfC1KXgDP8L5DBOC",
		"owner": {
			"user_id": "tORAgXM98Ge2ktNfkhdXbNQx8Rb2",
			"username": "Douglas"
		},
		"description": "OLÁ GRUPO",
		"title": "OLÁ GRUPO",
		"picture": "https://upload.wikimedia.org/wikipedia/commons/a/af/Tio_Douglas_Perfil.png"
	},
	{
		"id": "4Ri9u12SlThBK9o0ERCo",
		"owner": {
			"user_id": "9xE6qnaupgWi6yyHQ7ufpDVjTLy2",
			"username": "ratinho"
		},
		"description": "Treinar ninjutsu",
		"title": "Treinar ninjutsu",
		"picture": "https://cdn5.colorir.com/desenhos/color/201910/ratinho-com-queijo-animais-bosque-1517222.jpg"
	},
 ]
```

### 1.5. **Atualizar tarefa por ID da tarefa**

### `/tasks/:id`

### Exemplo de Request:
```
PATCH /tasks/:id
Host: https://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```
{
	"title": "varrer a casa",
	"description": "Varrer a casa updated"
}
```
### Exemplo de Response:
```
200 OK
```
```
{
	"id": "1ZzI5H2QGddmh3a4ml4e",
	"title": "varrer a casa",
	"description": "Varrer a casa updated"
}
```

### 1.6. **Listando tarefas por ID do usuário**

### `/tasks/:id`

### Exemplo de Request:
```
GET /tasks/:id
Host: https://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```
### Exemplo de Response:
```
200 OK
```
```json
[
	{
		"id": "04WIpfC1KXgDP8L5DBOC",
		"owner": {
			"user_id": "9xE6qnaupgWi6yyHQ7ufpDVjTLy2",
			"username": "ratinho"
		},
		"description": "OLÁ GRUPO",
		"title": "OLÁ GRUPO",
		"picture": "https://upload.wikimedia.org/wikipedia/commons/a/af/Tio_Douglas_Perfil.png"
	},
	{
		"id": "4Ri9u12SlThBK9o0ERCo",
		"owner": {
			"user_id": "9xE6qnaupgWi6yyHQ7ufpDVjTLy2",
			"username": "ratinho"
		},
		"description": "Treinar ninjutsu",
		"title": "Treinar ninjutsu",
		"picture": "https://cdn5.colorir.com/desenhos/color/201910/ratinho-com-queijo-animais-bosque-1517222.jpg"
	},
 ]
```

### 1.7. **Excluir tarefa por ID da tarefa**

### `/tasks/:id`

### Exemplo de Request:
```
DELETE /tasks/:id
Host: https://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
vazio
```
### Exemplo de Response:
```
204 NO CONTENT
```
```
{}
```
