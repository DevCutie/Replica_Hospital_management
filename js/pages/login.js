export function renderLogin(container) {
    container.innerHTML = `
    <section class="login-container">
        <div class="login-card">
            <div class="back-nav" style="margin-bottom: 1rem;">
                <button class="back-btn" onclick="window.location.hash='#home'" style="background: none; border: none; color: #666; cursor: pointer; display: flex; align-items: center; gap: 8px; font-weight: 500; transition: color 0.3s;">
                    <i class="fas fa-arrow-left"></i> Back to Home
                </button>
            </div>

            <div class="login-header">
                <h2 style="color: rgb(78, 152, 248); margin-bottom: 0.5rem;">Welcome Back</h2>
                <p style="font-size: 0.9rem; color: #666;">Please enter your details to access your portal</p>
            </div>
            
            <form class="login-form">
                <div class="form-group" style="margin-bottom: 1.5rem;">
                    <label class="form-label">Email Address</label>
                    <input type="email" class="form-input" placeholder="name@company.com" required>
                </div>
                
                <div class="form-group" style="margin-bottom: 1rem;">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-input" placeholder="••••••••" required>
                </div>
                
                <div class="form-options">
                    <label style="display: flex; align-items: center; gap: 5px;"><input type="checkbox"> Remember me</label>
                    <a href="#" style="color: rgb(78, 152, 248); text-decoration: none; font-size: 0.85rem;">Forgot Password?</a>
                </div>
                
                <button type="submit" class="sign" style="width: 100%; margin-top: 1.5rem;">Sign In</button>
                
                <p class="register-link">
                    Don't have an account? <span style="color: rgb(78, 152, 248); cursor: pointer; font-weight: 600;" onclick="window.location.hash='#signup'">Create one</span>
                </p>
            </form>
        </div>
    </section>
    `;
}