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
        
        stage('Verify') {
            steps {
                echo 'Verificando despliegue...'
                bat 'docker ps'
                bat 'echo "La aplicación se está ejecutando en http://localhost:3000"'
                bat 'echo "Puede tomar unos segundos para que esté completamente lista"'
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline de CI/CD completado exitosamente'
            echo 'Los contenedores están ejecutándose:'
            bat 'docker ps --format "table {{.Names}}\\t{{.Status}}\\t{{.Ports}}"'
        }
        success {
            echo '✅ ¡Pipeline ejecutado exitosamente!'
            echo '🌐 La aplicación está disponible en: http://localhost:3000'
        }
    }
}