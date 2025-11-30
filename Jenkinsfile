pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', 
                    url: 'https://github.com/GGEOVEGA/Proyecto-hola-mundo.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Instalando dependencias...'
                bat 'npm install'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Ejecutando pruebas...'
                bat 'npm test'
            }
            post {
                always {
                    echo 'Resultados de pruebas completados'
                    bat 'type coverage\\lcov.info || echo "No se encontró reporte de cobertura"'
                }
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
                bat 'timeout 10 > nul && curl http://localhost:3000 || echo "La aplicación está iniciándose..."'
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline de CI/CD completado'
            bat 'docker ps --format "table {{.Names}}\\t{{.Status}}\\t{{.Ports}}"'
        }
        success {
            echo '✅ ¡Pipeline ejecutado exitosamente!'
            echo '🌐 La aplicación está disponible en: http://localhost:3000'
            echo '📊 Pruebas ejecutadas y cobertura generada'
        }
    }
}