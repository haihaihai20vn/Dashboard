import "./NewUser.css";

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="Hai" />
                </div>
                <div className="newUserItem">
                    <label>Fullname</label>
                    <input type="text" placeholder="Nguyễn Thanh Hải" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="haithanhnguyen@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="Password" placeholder="Password..." />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="email" placeholder="+84 123 456 789" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="email" placeholder="Nghệ An | Việt Nam" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label for="female">Female</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}
