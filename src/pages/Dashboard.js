import useGetData from "../hooks/useGetData";
import Button from "../components/complex/Buttons";
import Spinner from "../components/complex/Spinner";
import ProfileBanner from "../components/complex/ProfileBanner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  DashboardContainer,
  Aside,
  MainContent,
  SectionContainer,
  SectionTitle,
  SectionsContainers,
} from "../components/styled/Dashboard.style";
import { Card, CardDescription, CardImage } from "../components/styled/Card";

const Dashboard = () => {
  const { data: events, loading: eventsLoading } = useGetData("events");
  const { data: workoutHistory, loading: workoutHistoryLoading } = useGetData("workoutHistory");
  const { data: announcements, loading: announcementsLoading } = useGetData("announcements");
  const { data: achievements, loading: achievementsLoading } = useGetData("achivements");

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
            {eventsLoading !== false ? <Spinner /> : events?.map((classInfo) => (
              <Card key={classInfo.id}>
                <CardDescription>
                  <h4>{classInfo.name}</h4>
                  <p>Date: {classInfo.date.toDate().toLocaleDateString()}</p>
                  <p>
                    Time:{" "}
                    {classInfo.date.toDate().toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                  </p>
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
            {workoutHistoryLoading !== false ? <Spinner /> : workoutHistory.map((workout) => (
              <Card key={workout.id}>
                <CardImage>
                  <img loading="lazy" src={workout.image} alt={workout.alt} />
                </CardImage>
                <CardDescription>
                  <p>Date: {workout.date.toDate().toLocaleDateString()}</p>
                  <p>Type: {workout.workoutType}</p>
                  <p>Duration: {workout.durationMinute} minutes</p>
                  <p>Calories Burned: {workout.caloriesBurned}</p>
                </CardDescription>
              </Card>
            ))}
          </SectionContainer>
          {/* Achievements Section */}
          <SectionContainer>
            <SectionTitle>Achievements</SectionTitle>
            <Swiper
              onSlideChange={() => {}}
              onSwiper={(swiper) => {}}
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
                },
              }}
            >
              {achievementsLoading !== false ? <Spinner /> : achievements.map((achievement) => (
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
            {announcementsLoading !== false ? <Spinner /> : announcements.map((announcement) => (
              <Card className="column" key={announcement.key}>
                <CardDescription>
                  <h4>{announcement.title}</h4>
                  <p>{announcement.description}</p>
                  <a href={announcement.link}>Learn more</a>
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
