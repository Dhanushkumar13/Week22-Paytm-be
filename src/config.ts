interface SecretConfig{
    jwt:{
        secret: string
    }
}

const config: SecretConfig = {
    jwt: {
        secret: 'sdasdasd1223'
    }
}

export default config;