 // Global variables
        let members = [];
        let workoutPlans = [];
        let currentMemberId = null;
        let exerciseInputCount = 0;
        
        const exerciseDatabase = [
            {
                name: "Push-ups",
                category: "Chest",
                description: "A basic upper body exercise targeting chest, shoulders, and triceps",
                instructions: "1. Start in a plank position with arms extended\n2. Lower your body until chest nearly touches the floor\n3. Push back up to starting position\n4. Keep your core tight throughout",
                tips: "Keep your body in a straight line. Don't let your hips sag or pike up.",
                muscles: "Chest, Shoulders, Triceps, Core"
            },
            {
                name: "Squats",
                category: "Legs",
                description: "Fundamental lower body exercise for building strength and mobility",
                instructions: "1. Stand with feet shoulder-width apart\n2. Lower your hips back and down as if sitting in a chair\n3. Keep your chest up and knees over toes\n4. Push through heels to return to standing",
                tips: "Don't let knees cave inward. Go as low as you can while maintaining good form.",
                muscles: "Quadriceps, Glutes, Hamstrings, Calves"
            },
            {
                name: "Deadlifts",
                category: "Back",
                description: "Compound exercise for posterior chain strength",
                instructions: "1. Stand with feet hip-width apart, bar over mid-foot\n2. Hinge at hips and knees to grip the bar\n3. Keep chest up and back straight\n4. Drive through heels and hips to stand up",
                tips: "Keep the bar close to your body. Don't round your back.",
                muscles: "Hamstrings, Glutes, Back, Traps, Core"
            },
            {
                name: "Plank",
                category: "Core",
                description: "Isometric core strengthening exercise",
                instructions: "1. Start in a push-up position\n2. Lower onto your forearms\n3. Keep your body in a straight line\n4. Hold the position",
                tips: "Don't let your hips sag or pike up. Breathe normally while holding.",
                muscles: "Core, Shoulders, Back"
            },
            {
                name: "Pull-ups",
                category: "Back",
                description: "Upper body pulling exercise for back and arm strength",
                instructions: "1. Hang from a bar with palms facing away\n2. Pull your body up until chin clears the bar\n3. Lower yourself back down with control\n4. Repeat for desired reps",
                tips: "Engage your core and avoid swinging. Use assistance bands if needed.",
                muscles: "Lats, Rhomboids, Biceps, Core"
            },
            {
                name: "Bench Press",
                category: "Chest",
                description: "Classic upper body pushing exercise",
                instructions: "1. Lie on bench with eyes under the bar\n2. Grip the bar slightly wider than shoulder-width\n3. Lower the bar to chest with control\n4. Press the bar back up to starting position",
                tips: "Keep your feet flat on the floor and maintain a slight arch in your back.",
                muscles: "Chest, Shoulders, Triceps"
            }
        ];

        // Initialize app
        function enterApp() {
            document.getElementById('heroSection').style.display = 'none';
            document.getElementById('mainApp').style.display = 'block';
            loadSampleData();
            updateDashboard();
            displayMembers();
            displayExercises();
            displayWorkoutPlans();
            
            // Set today's date as default
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('startDate').value = today;
        }

        // Navigation
        function showSection(sectionName) {
            // Hide all sections
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Remove active class from all nav tabs
            const navTabs = document.querySelectorAll('.nav-tab');
            navTabs.forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(sectionName).classList.add('active');
            
            // Add active class to clicked tab
            event.target.classList.add('active');
        }

        // Load sample data
        function loadSampleData() {
            if (members.length === 0) {
                members = [
                    {
                        id: 1,
                        name: "Diljot Singh",
                        email: "diljot_0069@gmail.com",
                        phone: "9888400001",
                        membershipType: "premium",
                        startDate: "2024-01-15",
                        duration: 12,
                        joinDate: new Date('2024-01-15').toISOString(),
                        lastVisit: new Date().toISOString(),
                        totalVisits: 45
                    },
                    {
                        id: 2,
                        name: "Sukhbir singh Badal",
                        email: "sukha420@gmail.com",
                        phone: "9784764943",
                        membershipType: "basic",
                        startDate: "2024-03-01",
                        duration: 6,
                        joinDate: new Date('2024-03-01').toISOString(),
                        lastVisit: new Date(Date.now() - 86400000).toISOString(),
                        totalVisits: 28
                    },
                    {
                        id: 3,
                        name: "Babbu Maan",
                        email: "mai_babbu_tusi_mera_maan@gmail.com",
                        phone: "9948757473",
                        membershipType: "vip",
                        startDate: "2023-12-01",
                        duration: 12,
                        joinDate: new Date('2023-12-01').toISOString(),
                        lastVisit: new Date(Date.now() - 172800000).toISOString(),
                        totalVisits: 67
                    },
                    {
                        id: 4,
                        name: "Salman khan",
                        email: "shera_guilty@gmail.com",
                        phone: "9946798499",
                        membershipType: "vip",
                        startDate: "2023-12-01",
                        duration: 3,
                        joinDate: new Date('2023-12-01').toISOString(),
                        lastVisit: new Date(Date.now() - 172800000).toISOString(),
                        totalVisits: 35
                    },{
                        id: 5,
                        name: "Sherry Maan",
                        email: "tin_peg@gmail.com",
                        phone: "9684845866",
                        membershipType: "vip",
                        startDate: "2023-12-01",
                        duration: 12,
                        joinDate: new Date('2023-12-01').toISOString(),
                        lastVisit: new Date(Date.now() - 172800000).toISOString(),
                        totalVisits: 75
                    },{
                        id: 6,
                        name: "Walter hartwell white",
                        email: "mrWhite@gmail.com",
                        phone: "9942498949",
                        membershipType: "vip",
                        startDate: "2023-12-01",
                        duration: 6,
                        joinDate: new Date('2023-12-01').toISOString(),
                        lastVisit: new Date(Date.now() - 172800000).toISOString(),
                        totalVisits: 85
                    }
                ];
            }

            if (workoutPlans.length === 0) {
                workoutPlans = [
                    {
                        id: 1,
                        name: "Upper Body Strength",
                        memberId: 1,
                        exercises: [
                            { name: "Bench Press", sets: "4x8" },
                            { name: "Pull-ups", sets: "3x10" },
                            { name: "Push-ups", sets: "3x15" },
                            { name: "Plank", sets: "3x60sec" }
                        ],
                        createdDate: new Date().toISOString()
                    },
                    {
                        id: 2,
                        name: "Full Body Beginner",
                        memberId: 2,
                        exercises: [
                            { name: "Squats", sets: "3x12" },
                            { name: "Push-ups", sets: "3x8" },
                            { name: "Plank", sets: "3x30sec" },
                            { name: "Walking", sets: "20min" }
                        ],
                        createdDate: new Date().toISOString()
                    }
                ];
            }
        }

        // Member form submission
        document.getElementById('memberForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const member = {
                id: Date.now(),
                name: document.getElementById('memberName').value,
                email: document.getElementById('memberEmail').value,
                phone: document.getElementById('memberPhone').value,
                membershipType: document.getElementById('membershipType').value,
                startDate: document.getElementById('startDate').value,
                duration: parseInt(document.getElementById('duration').value),
                joinDate: new Date().toISOString(),
                lastVisit: null,
                totalVisits: 0
            };
            
            members.push(member);
            displayMembers();
            updateDashboard();
            
            // Reset form
            this.reset();
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('startDate').value = today;
            
            alert('Member added successfully!');
        });

        // Display members
        function displayMembers() {
            const membersList = document.getElementById('membersList');
            membersList.innerHTML = '';
            
            members.forEach(member => {
                const endDate = new Date(member.startDate);
                endDate.setMonth(endDate.getMonth() + member.duration);
                const isActive = new Date() <= endDate;
                
                const memberCard = document.createElement('div');
                memberCard.className = 'member-card';
                memberCard.onclick = () => showMemberDetails(member.id);
                
                memberCard.innerHTML = `
                    <div class="member-name">${member.name}</div>
                    <div class="member-info">
                        <span>Type: ${member.membershipType.toUpperCase()}</span>
                        <span>Last Visit: ${member.lastVisit ? new Date(member.lastVisit).toLocaleDateString() : 'Never'}</span>
                        <span class="status-badge ${isActive ? 'status-active' : 'status-expired'}">
                            ${isActive ? 'Active' : 'Expired'}
                        </span>
                    </div>
                `;
                
                membersList.appendChild(memberCard);
            });
        }

        // Show member details
        function showMemberDetails(memberId) {
            currentMemberId = memberId;
            const member = members.find(m => m.id === memberId);
            if (!member) return;
            
            const endDate = new Date(member.startDate);
            endDate.setMonth(endDate.getMonth() + member.duration);
            const isActive = new Date() <= endDate;
            
            const memberDetails = document.getElementById('memberDetails');
            memberDetails.innerHTML = `
                <p><strong>Name:</strong> ${member.name}</p>
                <p><strong>Email:</strong> ${member.email}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Membership:</strong> ${member.membershipType.toUpperCase()}</p>
                <p><strong>Start Date:</strong> ${new Date(member.startDate).toLocaleDateString()}</p>
                <p><strong>End Date:</strong> ${endDate.toLocaleDateString()}</p>
                <p><strong>Status:</strong> <span class="status-badge ${isActive ? 'status-active' : 'status-expired'}">${isActive ? 'Active' : 'Expired'}</span></p>
                <p><strong>Total Visits:</strong> ${member.totalVisits}</p>
                <p><strong>Last Visit:</strong> ${member.lastVisit ? new Date(member.lastVisit).toLocaleString() : 'Never'}</p>
            `;
            
            document.getElementById('memberModal').style.display = 'block';
        }

        // Check-in function
        function checkIn() {
            const member = members.find(m => m.id === currentMemberId);
            if (member) {
                member.lastVisit = new Date().toISOString();
                member.totalVisits++;
                updateDashboard();
                displayMembers();
                closeModal('memberModal');
                alert('Check-in successful!');
            }
        }

        // Workout Plans
        function showCreateWorkoutModal() {
            const planMember = document.getElementById('planMember');
            planMember.innerHTML = '<option value="">Select Member</option>';
            
            members.forEach(member => {
                const option = document.createElement('option');
                option.value = member.id;
                option.textContent = member.name;
                planMember.appendChild(option);
            });
            
            const exerciseInputs = document.getElementById('exerciseInputs');
            exerciseInputs.innerHTML = '';
            exerciseInputCount = 0;
            addExerciseInput();
            document.getElementById('workoutModal').style.display = 'block';
        }

        function addExerciseInput() {
            const container = document.getElementById('exerciseInputs');
            const exerciseDiv = document.createElement('div');
            exerciseDiv.className = 'exercise-input-row';
            exerciseDiv.id = `exercise-${exerciseInputCount}`;
            
            exerciseDiv.innerHTML = `
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Exercise name" required>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Sets x Reps (e.g., 3x12)" required>
                </div>
                <button type="button" class="remove-exercise" onclick="removeExerciseInput(${exerciseInputCount})">Remove</button>
            `;
            
            container.appendChild(exerciseDiv);
            exerciseInputCount++;
        }

        function removeExerciseInput(index) {
            const element = document.getElementById(`exercise-${index}`);
            if (element) {
                element.remove();
            }
        }

        // Workout form submission
        document.getElementById('workoutForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const planName = document.getElementById('planName').value;
            const memberId = document.getElementById('planMember').value;
            const exerciseInputs = document.getElementById('exerciseInputs').children;
            
            const exercises = [];
            for (let i = 0; i < exerciseInputs.length; i++) {
                const inputs = exerciseInputs[i].querySelectorAll('input');
                if (inputs[0] && inputs[1] && inputs[0].value && inputs[1].value) {
                    exercises.push({
                        name: inputs[0].value,
                        sets: inputs[1].value
                    });
                }
            }
            
            if (exercises.length === 0) {
                alert('Please add at least one exercise');
                return;
            }
            
            const workoutPlan = {
                id: Date.now(),
                name: planName,
                memberId: parseInt(memberId),
                exercises: exercises,
                createdDate: new Date().toISOString()
            };
            
            workoutPlans.push(workoutPlan);
            displayWorkoutPlans();
            closeModal('workoutModal');
            this.reset();
            alert('Workout plan created successfully!');
        });

        function displayWorkoutPlans() {
            const container = document.getElementById('workoutPlans');
            container.innerHTML = '';
            
            if (workoutPlans.length === 0) {
                container.innerHTML = '<p>No workout plans created yet.</p>';
                return;
            }
            
            workoutPlans.forEach(plan => {
                const member = members.find(m => m.id === plan.memberId);
                const planDiv = document.createElement('div');
                planDiv.className = 'workout-plan';
                
                planDiv.innerHTML = `
                    <div class="day-header">${plan.name} - ${member ? member.name : 'Unknown Member'}</div>
                    <div class="exercises-list">
                        ${plan.exercises.map(exercise => `
                            <div class="exercise-card">
                                <div class="exercise-name">${exercise.name}</div>
                                <div class="exercise-details">${exercise.sets}</div>
                            </div>
                        `).join('')}
                    </div>
                `;
                
                container.appendChild(planDiv);
            });
        }

        // Exercise Database
        function displayExercises() {
            const container = document.getElementById('exercisesList');
            container.innerHTML = '';
            
            exerciseDatabase.forEach(exercise => {
                const exerciseCard = document.createElement('div');
                exerciseCard.className = 'exercise-card';
                exerciseCard.onclick = () => showExerciseDetails(exercise);
                
                exerciseCard.innerHTML = `
                    <div class="exercise-name">${exercise.name}</div>
                    <div class="exercise-details">
                        <strong>Category:</strong> ${exercise.category} | 
                        <strong>Muscles:</strong> ${exercise.muscles}
                    </div>
                    <p>${exercise.description}</p>
                `;
                
                container.appendChild(exerciseCard);
            });
        }

        function showExerciseDetails(exercise) {
            const details = document.getElementById('exerciseDetails');
            details.innerHTML = `
                <h2>${exercise.name}</h2>
                <p><strong>Category:</strong> ${exercise.category}</p>
                <p><strong>Primary Muscles:</strong> ${exercise.muscles}</p>
                <p><strong>Description:</strong> ${exercise.description}</p>
                
                <h3>Instructions:</h3>
                <pre style="white-space: pre-wrap; font-family: Arial, sans-serif; background: #f8f9fa; padding: 1rem; border-radius: 8px;">${exercise.instructions}</pre>
                
                <h3>Form Tips:</h3>
                <div style="background: #e3f2fd; padding: 1rem; border-radius: 8px; border-left: 4px solid #2196f3;">
                    <p>${exercise.tips}</p>
                </div>
            `;
            
            document.getElementById('exerciseModal').style.display = 'block';
        }


       function openLoginPage() {
            window.location.href = "SignUp_Login_Form.html"; // navigate to login page
}






        // Dashboard Updates
        function updateDashboard() {
            const totalMembers = members.length;
            const today = new Date().toDateString();
            const activeMembers = members.filter(member => {
                const endDate = new Date(member.startDate);
                endDate.setMonth(endDate.getMonth() + member.duration);
                return new Date() <= endDate;
            }).length;
            
            const todayVisits = members.filter(member => 
                member.lastVisit && new Date(member.lastVisit).toDateString() === today
            ).length;
            
            document.getElementById('totalMembers').textContent = totalMembers;
            document.getElementById('activeMembers').textContent = activeMembers;
            document.getElementById('todayVisits').textContent = todayVisits;
            
            // Recent Activities
            const recentActivities = document.getElementById('recentActivities');
            const recentVisits = members
                .filter(member => member.lastVisit)
                .sort((a, b) => new Date(b.lastVisit) - new Date(a.lastVisit))
                .slice(0, 5);
                
            if (recentVisits.length > 0) {
                recentActivities.innerHTML = recentVisits.map(member => `
                    <div style="padding: 0.5rem 0; border-bottom: 1px solid #eee;">
                        <strong>${member.name}</strong> visited on ${new Date(member.lastVisit).toLocaleString()}
                    </div>
                `).join('');
            } else {
                recentActivities.innerHTML = '<p>No recent activities</p>';
            }
        }

        // Modal Management
        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }

        // Close modals when clicking outside
        window.onclick = function(event) {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }

        // Initialize when page loads
        document.addEventListener('DOMContentLoaded', function() {
            // Set today's date as default
            const today = new Date().toISOString().split('T')[0];
            const startDateInput = document.getElementById('startDate');
            if (startDateInput) {
                startDateInput.value = today;
            }

            // Add some interactive animations on load
            setTimeout(() => {
                const statCards = document.querySelectorAll('.stat-card');
                statCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.transform = 'translateY(-5px)';
                        setTimeout(() => {
                            card.style.transform = 'translateY(0)';
                        }, 200);
                    }, index * 100);
                });
            }, 1000);
        });

        // Add keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            // ESC to close modals
            if (e.key === 'Escape') {
                const modals = document.querySelectorAll('.modal');
                modals.forEach(modal => {
                    if (modal.style.display === 'block') {
                        modal.style.display = 'none';
                    }
                });
            }
        });

        // Add auto-save functionality (simulated)
        function autoSave() {
            const gymData = {
                members: members,
                workoutPlans: workoutPlans,
                lastSaved: new Date().toISOString()
            };
            
            // In a real application, this would save to a database
            console.log('Data auto-saved:', gymData);
        }

        // Auto-save every 30 seconds
        setInterval(autoSave, 30000);

        // Add member search functionality
        function searchMembers(searchTerm) {
            const filteredMembers = members.filter(member => 
                member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                member.phone.includes(searchTerm)
            );
            
            const membersList = document.getElementById('membersList');
            membersList.innerHTML = '';
            
            filteredMembers.forEach(member => {
                const endDate = new Date(member.startDate);
                endDate.setMonth(endDate.getMonth() + member.duration);
                const isActive = new Date() <= endDate;
                
                const memberCard = document.createElement('div');
                memberCard.className = 'member-card';
                memberCard.onclick = () => showMemberDetails(member.id);
                
                memberCard.innerHTML = `
                    <div class="member-name">${member.name}</div>
                    <div class="member-info">
                        <span>Type: ${member.membershipType.toUpperCase()}</span>
                        <span>Last Visit: ${member.lastVisit ? new Date(member.lastVisit).toLocaleDateString() : 'Never'}</span>
                        <span class="status-badge ${isActive ? 'status-active' : 'status-expired'}">
                            ${isActive ? 'Active' : 'Expired'}
                        </span>
                    </div>
                `;
                
                membersList.appendChild(memberCard);
            });
        }

        // Add membership expiry notifications
        function checkExpiringMemberships() {
            const expiringMembers = members.filter(member => {
                const endDate = new Date(member.startDate);
                endDate.setMonth(endDate.getMonth() + member.duration);
                const daysLeft = Math.ceil((endDate - new Date()) / (1000 * 60 * 60 * 24));
                return daysLeft <= 7 && daysLeft > 0;
            });
            
            if (expiringMembers.length > 0) {
                console.log(`Warning: ${expiringMembers.length} memberships expiring within 7 days!`);
                // In a real app, you would show notifications or send emails
            }
        }

        // Check expiring memberships every hour
        setInterval(checkExpiringMemberships, 3600000);