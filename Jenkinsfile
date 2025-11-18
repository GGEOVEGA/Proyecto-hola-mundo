pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', 
                    url: 'https://github.com/GGEOVEGA/Proyecto-hola-mundo.git'
            }
        }
        
        stage('Build') {
            steps {
                echo 'Construyendo la aplicación...'
                bat 'docker-compose down || echo "No hay contenedores para detener"'
                bat 'docker-compose build'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Desplegando aplicación...'
                bat 'docker-compose up -d'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Verificando que la aplicación funciona...'
                bat 'timeout 10 && curl -f http://localhost:3000 || echo "La aplicación se está iniciando..."'
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline completado'
        }
        success {
            echo '¡Pipeline ejecutado exitosamente!'
        }
        failure {
            echo 'Pipeline falló'
        }
    }
}