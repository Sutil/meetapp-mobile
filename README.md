# Meetapp mobile

## Intruções (somente Android)

## Antes de executar o projeto

* Siga as instruções [nesse link](https://docs.rocketseat.dev/ambiente-react-native/introducao) para configurar o ambiente.
* Tenha um emulador do Android executando.
* Tenha certeza que o [backend](https://github.com/sutil/meetapp-backend#meetapp-backend) da aplicação está executando.
* Tenha certeza que a variável APP_URL do arquivo [.env](https://github.com/Sutil/meetapp-backend/blob/master/.env.example) do backend está configurada de forma que o emulador do android encontre o host. Essa váriável é responsável por retornar URLs das imagens da aplicação.
* Tenha certeza que o arquivo [.gradlew](./android/gradlew) no diretório android tem premissão de execução.

## Execute

* Em um terminal navegue até o diretório do projeto e execute:
```sh
react-native start
```

Deixe esse terminal aberto e abra outro no mesmo diretório.
Execute.
```sh
react-native run-android
```

