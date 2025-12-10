
        function toggleChat() {
            const chatWindow = document.getElementById('chatWindow');
            chatWindow.classList.toggle('active');
        }

        function handleKeyPress(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        }


        const conversationHistory = [];

        const knowledgeBase = {
            "qui": "RAYANE FOSSOH est un étudiant passionné en génie logiciel, spécialisé dans le développement web et l'intelligence artificielle. Il crée des expériences web innovantes en combinant design moderne et technologies IA.",
            
            "compétences": "RAYANE maîtrise plusieurs technologies : HTML 5, CSS 3, JavaScript, Python, ainsi que Git & GitHub pour la gestion de versions. Il est particulièrement passionné par l'intégration de l'IA dans les applications web.",
            
            "projets": "RAYANE a réalisé plusieurs projets intéressants :\n1. Un assistant IA personnel avec interface de chat\n2. Un portfolio interactif utilisant Gradio\n3. L'intégration d'API Claude pour créer des chatbots intelligents",
            
            "contact": "Vous pouvez contacter RAYANE via :\n📧 Email : rayanefossoh07@gmail.com\n💼 LinkedIn : https://www.linkedin.com/in/rayane-fossoh\n👨‍💻 GitHub : https://github.com/fossoh-hub",
            
            "ambitions": "RAYANE aspire à devenir développeur full-stack spécialisé en intelligence artificielle. Il souhaite créer des solutions innovantes qui combinent design élégant et technologies IA de pointe.",
            
            "passion": "Sa passion principale est de créer des expériences web innovantes en combinant design moderne et technologies d'intelligence artificielle. Il aime expérimenter avec de nouvelles technologies.",
            
            "formation": "RAYANE est actuellement étudiant en génie logiciel, où il approfondit ses connaissances en développement web, programmation et intelligence artificielle."
        };

        function findBestResponse(message) {
            const lowerMessage = message.toLowerCase();
            
            for (const [keyword, response] of Object.entries(knowledgeBase)) {
                if (lowerMessage.includes(keyword)) {
                    return response;
                }
            }
            
            if (lowerMessage.includes("salut") || lowerMessage.includes("bonjour") || lowerMessage.includes("hello")) {
                return "Bonjour ! 👋 Comment puis-je vous aider à en savoir plus sur RAYANE FOSSOH ?";
            }
            
            if (lowerMessage.includes("merci")) {
                return "Avec plaisir ! N'hésitez pas si vous avez d'autres questions sur RAYANE. 😊";
            }
            
            return "Je peux vous parler des compétences, projets, ambitions de RAYANE ou vous donner ses informations de contact. Qu'aimeriez-vous savoir ?";
        }

        function addMessage(text, sender) {
            const messagesContainer = document.getElementById('chatMessages');
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${sender}`;
            messageDiv.textContent = text;
            messagesContainer.appendChild(messageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function sendMessage() {
            const input = document.getElementById('chatInput');
            const message = input.value.trim();
            
            if (!message) return;

            addMessage(message, 'user');
            input.value = '';

            document.getElementById('loading').classList.add('active');

            setTimeout(() => {
                const response = findBestResponse(message);
                document.getElementById('loading').classList.remove('active');
                addMessage(response, 'ai');
            }, 800);
        }

        function sendSuggestion(text) {
            document.getElementById('chatInput').value = text;
            sendMessage();
        }

        function handleKeyPress(event) {
            if (event.key === 'Enter') {
                sendMessage();
            }
        }

        function addMessage(text, type) {
            const messagesContainer = document.getElementById('chatMessages');
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${type === 'user' ? 'user-message' : 'ai-message'}`;
            messageDiv.textContent = text;
            messagesContainer.appendChild(messageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }