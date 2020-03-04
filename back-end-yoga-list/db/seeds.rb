User.destroy_all
Pose.destroy_all

user_one = User.create(username: "yogimom" )
user_two = User.create(username: "coffeedad")
user_three = User.create(username: "gryffindorgal")

pose_one = Pose.create(name: "Trikonasana", image_url: "https://marketing.gaia.com/wp-content/uploads/Meta-REVOLVED_TRIANGLE_POSE-1024x576jpg-768x432.jpg", user_id: User.all.sample.id )
pose_two = Pose.create(name: "Upward Facing Dog", image_url: "https://marketing.gaia.com/wp-content/uploads/Urdhva-Mukha-Svanasana-Upward-Facing-Dog-1024X576-768x432.jpg", user_id: User.all.sample.id)
pose_three = Pose.create(name: "Downward Facing Dog", image_url: "https://marketing.gaia.com/wp-content/uploads/1920x1080_DownwardFacingDogPose.jpg", user_id: User.all.sample.id)