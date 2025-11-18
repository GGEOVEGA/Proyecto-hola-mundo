pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                echo 'Construyendo la aplicación...'
                sh 'docker-compose down'
                sh 'docker-compose build'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Ejecutando tests...'
                // Aquí puedes agregar tus tests
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Desplegando aplicación...'
                sh 'docker-compose up -d'
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