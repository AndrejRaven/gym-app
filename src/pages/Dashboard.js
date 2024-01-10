import styled from "styled-components";
import Button from "../components/Buttons";
import ProfileBanner from "../components/ProfileBanner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardDescription, CardImage } from "../components/Card";
import "swiper/css";

const DashboardContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const SectionsContainers = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 30px;
  @media (max-width: 578px) {
    flex-direction: column-reverse;
    gap: 0; /* Change to column layout when width is smaller than 578px */
  }
`;

const SectionContainer = styled.div`
  flex: 1;
  width: 100%;
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #007bff;
`;

const MainContent = styled.div`
  display: flex;
  margin: 0 auto;
  margin-left: 30px;
  flex-direction: column;
  flex: 0.75;
  width: 70%;
  gap: 30px;
  @media (max-width: 578px) {
    flex: 1;
    width: 100%;
  }
`;

const Aside = styled.aside`
  flex: 0.25;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 50px;
  margin-right: 30px;
  @media (max-width: 578px) {
    flex: 0.9;
    width: 90%;
    margin: 0;
  }
`;




const Dashboard = () => {
  const upcomingClasses = [
    {
      id: 1,
      name: "Yoga Class",
      date: "January 15, 2023",
      time: "10:00 AM",
      instructor: "John Doe",
      image:
        "https://www.fitsri.com/wp-content/uploads/2021/03/yoga-for-height-increase-1024x683.jpg",
      alt: "Yoga classes",
    },
    {
      id: 2,
      name: "HIIT Workout",
      date: "January 18, 2023",
      time: "4:30 PM",
      instructor: "Jane Smith",
      image:
        "https://static01.nyt.com/images/2023/03/21/multimedia/14WNT-HIIT-WORKOUTS1-lktg/14WNT-HIIT-WORKOUTS1-lktg-videoSixteenByNine3000.jpg",
      alt: "Hiit workout",
    },
    // Add more classes as needed
  ];

  // Example data for workout tracking
  const workoutHistory = [
    {
      id: 1,
      date: "January 10, 2023",
      workoutType: "Cardio",
      duration: "30 minutes",
      caloriesBurned: 200,
      image:
        "https://www.verywellfit.com/thmb/roD-04fCwquWw3UPNu8eMOpWwdc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4126506-GettyImages-13110412751-a45ecde8b4fa4448b498b86e1d78c4a6.jpg",
      alt: "Heart Icon",
    },
    {
      id: 2,
      date: "January 12, 2023",
      workoutType: "Strength Training",
      duration: "45 minutes",
      caloriesBurned: 300,
      image: "https://s3.envato.com/files/335845273/34_1R3A6685.jpg",
      alt: "Muscle Icon",
    },
    // Add more workout entries as needed
  ];

  // Example data for announcements
  const announcements = [
    {
      id: 1,
      title: "New Yoga Class Schedule",
      content:
        "Check out our updated yoga class schedule for the upcoming month!",
      link: "/announcements/new-yoga-class-schedule",
      image:
        "https://images.assetsdelivery.com/compings_v2/sheeryl/sheeryl1908/sheeryl190800013.jpg",
      alt: "New Yoga Class Schedule",
    },
    {
      id: 2,
      title: "Special Event: Outdoor Bootcamp",
      content: "Join us for an exciting outdoor bootcamp session next weekend!",
      link: "/announcements/oudtor-bootcamp",
      image: "https://www.bcuk.uk/wp-content/uploads/IMG_4378-1.jpg",
      alt: "Special Event: Outdoor Bootcamp",
    },
    // Add more announcements as needed
  ];

  // Example data for achievements
  const achievements = [
    {
      id: 1,
      title: "100-Mile Club",
      description:
        "Congratulations! Youve reached the 100-mile running milestone.",
      progress: 78,
      image:
        "https://www.rumpshaker5k.com/uploads/1/6/9/6/1696514/100-mile-finisher-badge_orig.png",
      alt: "100 mile icon",
    },
    {
      id: 2,
      title: "Strength Master",
      description:
        "Youve successfully completed the advanced strength training program.",
      progress: 58,
      image: "https://cdn-icons-png.flaticon.com/512/2382/2382483.png",
      alt: "Strength Master",
    },
    {
      id: 3,
      title: "100-Mile Club",
      description:
        "Congratulations! Youve reached the 100-mile running milestone.",
      progress: 78,
      image:
        "https://www.rumpshaker5k.com/uploads/1/6/9/6/1696514/100-mile-finisher-badge_orig.png",
      alt: "100 mile icon",
    },
    {
      id: 4,
      title: "Strength Master",
      description:
        "Youve successfully completed the advanced strength training program.",
      progress: 58,
      image: "https://cdn-icons-png.flaticon.com/512/2382/2382483.png",
      alt: "Strength Master",
    },
    // Add more achievements as needed
  ];

  return (
    <DashboardContainer>
      <div>
        <ProfileBanner />
      </div>
      <SectionsContainers>
        <MainContent>
          {/* Upcoming Classes Section */}
          <SectionContainer>
            <SectionTitle>Upcoming Classes</SectionTitle>
            {upcomingClasses.map((classInfo) => (
              <Card key={classInfo.id}>
                <CardDescription>
                  <h4>{classInfo.name}</h4>
                  <p>Date: {classInfo.date}</p>
                  <p>Time: {classInfo.time}</p>
                  <p>
                    Instructor: <a>{classInfo.instructor}</a>
                  </p>
                  <Button
                    classes="blue"
                    onClick={() => {
                      console.log("clicked");
                    }}
                  >
                    Schedule Workout
                  </Button>
                  <Button classes="labelblue">Remind me later</Button>
                </CardDescription>
                <CardImage>
                  <img src={classInfo.image} alt={classInfo.alt} />
                </CardImage>
              </Card>
            ))}
          </SectionContainer>
          {/* Workout Tracking Section */}
          <SectionContainer>
            <SectionTitle>Workout Tracking</SectionTitle>
            {workoutHistory.map((workout) => (
              <Card key={workout.id}>
                <CardImage>
                  <img src={workout.image} alt={workout.alt} />
                </CardImage>
                <CardDescription>
                  <p>Date: {workout.date}</p>
                  <p>Type: {workout.workoutType}</p>
                  <p>Duration: {workout.duration}</p>
                  <p>Calories Burned: {workout.caloriesBurned}</p>
                </CardDescription>
              </Card>
            ))}
          </SectionContainer>
          {/* Achievements Section */}
          <SectionContainer>
            <SectionTitle>Achievements</SectionTitle>
            <Swiper
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              loop={true}
              breakpoints={{
              640: {
                  slidesPerView: 1.2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 50,
                }
              }}
            >
              {achievements.map((achievement) => (
                <SwiperSlide key={achievement.key}>
                  <Card className="column small">
                    <CardDescription>
                      <p>{achievement.progress}/100</p>
                      <h4>{achievement.title}</h4>
                      <p>{achievement.description}</p>
                    </CardDescription>
                    <CardImage
                      className="small achivement"
                      back={achievement.image}
                      progress={achievement.progress}
                    >
                      <img src={achievement.image} alt={achievement.alt} />
                    </CardImage>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </SectionContainer>
        </MainContent>
        <Aside>
          {/* Announcements Section */}
          <SectionContainer>
            <SectionTitle>Announcements</SectionTitle>
            {announcements.map((announcement) => (
              <Card className="column" key={announcement.key}>
                <CardDescription>
                  <h4>{announcement.title}</h4>
                  <p>{announcement.content}</p>
                  <a>Learn more</a>
                </CardDescription>
                <CardImage>
                  <img src={announcement.image} alt={announcement.alt} />
                </CardImage>
              </Card>
            ))}
          </SectionContainer>
        </Aside>
      </SectionsContainers>
    </DashboardContainer>
  );
};

export default Dashboard;
