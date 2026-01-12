import React, { useState } from "react";
import {
  Code,
  Zap,
  Server,
  Database,
  Layout,
  Settings,
  Cpu,
  Globe,
  Mail,
  Linkedin,
  Github,
  GraduationCap,
  MapPin,
  Calendar,
  Award,
  ExternalLink,
  Phone,
  Download,
} from "lucide-react";

// Navbar Component

// Tech Stack Circle Component
const AboutContent = () => {
  return (
    <div style={{ animation: "fadeIn 0.5s ease-in-out", maxWidth: "800px" }}>
      <p
        style={{
          color: "#9ca3af",
          lineHeight: "1.8",
          fontSize: "1.05rem",
          marginBottom: "2rem",
        }}
      >
        I am a IT student with a deep passion for building web applications that
        solve real-world problems. Beyond coding, I enjoy{" "}
        <strong>football</strong> and exploring new UI/UX trends. I am always
        eager to learn new technologies and improve my problem-solving skills.
      </p>

      {/* Soft Skills dạng Tags */}
      <div>
        <h4 style={{ color: "#ffffff", marginBottom: "1rem" }}>Soft Skills</h4>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {[
            "Teamwork",
            "Time Management",
            "Problem Solving",
            "Adaptability",
            "English Communication",
          ].map((skill, index) => (
            <span
              key={index}
              style={{
                border: "1px solid #2d3342",
                color: "#9ca3af",
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                fontSize: "0.9rem",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
const TechStackCircle = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skillData = [
    { name: "React", icon: Code },
    { name: "Next.js", icon: Zap },
    { name: "TypeScript", icon: Code },
    { name: "Node.js", icon: Server },
    { name: "PostgreSQL", icon: Database },
    { name: "Tailwind CSS", icon: Layout },
    { name: "Figma", icon: Settings },
    { name: "Git", icon: Settings },
    { name: "Docker", icon: Cpu },
    { name: "Express.js", icon: Server },
    { name: "Supabase", icon: Database },
    { name: "RESTful APIs", icon: Globe },
    { name: "JavaScript", icon: Code },
    { name: "HTML5", icon: Layout },
    { name: "CSS3", icon: Layout },
    { name: "Spring Boot", icon: Server },
  ];

  const radius = 160;
  const centerX = 220;
  const centerY = 220;

  return (
    <div className="relative" style={{ width: "440px", height: "440px" }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-3xl font-bold" style={{ color: "#ffffff" }}>
          Tech Stack
        </h2>
      </div>

      {skillData.map((skill, index) => {
        const angle = (index / skillData.length) * 2 * Math.PI - Math.PI / 2;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        const Icon = skill.icon;
        const isHovered = hoveredIndex === index;

        return (
          <div
            key={index}
            className="absolute transition-all duration-300 cursor-pointer"
            style={{
              left: `${x}px`,
              top: `${y}px`,
              transform: `translate(-50%, -50%) scale(${isHovered ? 1.2 : 1})`,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className="relative rounded-xl p-3 transition-all duration-300"
              style={{
                background: isHovered ? "#1c1f26" : "rgba(28, 31, 38, 0.6)",
                border: `1px solid ${isHovered ? "#38bdf8" : "#2d3342"}`,
              }}
            >
              <Icon
                size={24}
                style={{
                  color: isHovered ? "#38bdf8" : "#9ca3af",
                }}
              />
            </div>

            {isHovered && (
              <div
                className="absolute whitespace-nowrap px-3 py-1.5 rounded-lg text-sm font-medium"
                style={{
                  top: "-35px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#1c1f26",
                  border: "1px solid #38bdf8",
                  color: "#ffffff",
                }}
              >
                {skill.name}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Left side - Avatar and Introduction */}
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "2rem",
              }}
            >
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    inset: "-10px",
                    background: "linear-gradient(135deg, #38bdf8, #818cf8)",
                    borderRadius: "50%",
                    opacity: "0.2",
                    filter: "blur(20px)",
                  }}
                ></div>
                <img
                  src="src/assets/picture/Avatar.jpg"
                  alt="Avatar"
                  style={{
                    width: "280px",
                    height: "280px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    border: "4px solid #38bdf8",
                    position: "relative",
                    zIndex: 1,
                  }}
                />
              </div>
            </div>
            <div
              style={{
                fontSize: "1.125rem",
                color: "#38bdf8",
                marginBottom: "1rem",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Hello, I'm Pham Viet Duc
            </div>
            <h1
              style={{
                fontSize: "2.75rem",
                fontWeight: "700",
                marginBottom: "1rem",
                lineHeight: "1.1",
                textAlign: "center",
              }}
            >
              Full Stack Developer
            </h1>
            <p
              style={{
                fontSize: "1rem",
                color: "#9ca3af",
                marginBottom: "2rem",
                lineHeight: "1.6",
                textAlign: "center",
              }}
            >
              IT student with a strong foundation in React/Next.js and Node.js.
              Seeking a Web Developer Intern position to contribute to real
              world projects and enhance professional skills.
            </p>
            <div
              style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
            >
              <a
                href="contact"
                style={{
                  background: "#38bdf8",
                  color: "#000",
                  padding: "0.8rem 1.5rem",
                  borderRadius: "8px",
                  fontWeight: "600",
                  textDecoration: "none",
                  transition: "transform 0.3s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.transform = "translateY(-2px)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.transform = "translateY(0)")
                }
              >
                Contact Me
              </a>
              <a
                href="/pdf/PhamVietDuc_WebDeveloper_Intern_CV.pdf" // Đường dẫn tính từ thư mục public
                download="Pham_Viet_Duc_Web_Dev_Intern_CV.pdf" // Tên file khi người dùng tải về
                style={{
                  background: "transparent",
                  color: "#38bdf8",
                  padding: "0.8rem 1.5rem",
                  borderRadius: "8px",
                  fontWeight: "600",
                  textDecoration: "none",
                  border: "2px solid #38bdf8",
                  transition: "all 0.3s",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem", // Khoảng cách giữa icon và chữ
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(56, 189, 248, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <Download size={20} />
                Download CV
              </a>
            </div>
          </div>

          {/* Right side - Tech Stack Circle */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TechStackCircle />
          </div>
        </div>
      </div>
    </section>
  );
};

// 1. Education Content
const EducationContent = () => {
  return (
    <div style={{ animation: "fadeIn 0.5s ease-in-out" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "150px 1px 1fr",
          gap: "2rem",
          marginBottom: "2rem",
        }}
      >
        <div style={{ color: "#9ca3af", fontWeight: "500" }}>
          2023 - Present
        </div>
        <div style={{ width: "1px", background: "#2d3342" }}></div>
        <div>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#ffffff",
              marginBottom: "0.5rem",
            }}
          >
            Bachelor of Information Technology
          </h3>
          <div
            style={{
              color: "#38bdf8",
              marginBottom: "0.5rem",
              fontWeight: "500",
            }}
          >
            University of Information Technology (UIT) - VNU.HCM
          </div>
          <p style={{ color: "#9ca3af" }}>GPA: 8.35/10 • Ho Chi Minh City</p>
        </div>
      </div>
    </div>
  );
};

// 2. Achievement Content (Phong cách tối giản)
const AchievementContent = () => {
  const achievements = [
    {
      title: "GPA: 8.35/10",
      description: "University of Information Technology (UIT)",
      subtext: "Academic Excellence",
      icon: GraduationCap,
    },
    {
      title: "IELTS 6.0",
      description: "Proficient in reading technical documentation",
      subtext: "Language Proficiency",
      icon: Globe,
    },
    {
      title: "Full-Stack Web Development",
      description: "Completed comprehensive Bootcamp on Udemy",
      subtext: "Certification",
      icon: Award,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem", // Khoảng cách giữa các hàng
        animation: "fadeIn 0.5s ease-in-out",
        maxWidth: "800px", // Giới hạn chiều rộng cho gọn
      }}
    >
      {achievements.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "flex-start", // Căn icon theo dòng đầu tiên
            gap: "1.5rem",
            paddingBottom: "1.5rem",
            borderBottom:
              index !== achievements.length - 1 ? "1px solid #2d3342" : "none", // Gạch chân ngăn cách trừ mục cuối
          }}
        >
          {/* Icon nhỏ gọn */}
          <div
            style={{
              background: "#1c1f26",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #2d3342",
              color: "#38bdf8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <item.icon size={20} />
          </div>

          {/* Nội dung */}
          <div>
            <h4
              style={{
                fontSize: "1.125rem", // Kích thước chữ tiêu đề vừa phải (~18px)
                fontWeight: "600",
                color: "#ffffff",
                marginBottom: "0.25rem",
              }}
            >
              {item.title}
            </h4>
            <p
              style={{
                color: "#9ca3af",
                fontSize: "0.95rem",
                marginBottom: "0.25rem",
              }}
            >
              {item.description}
            </p>
            <span
              style={{
                fontSize: "0.8rem",
                color: "#38bdf8",
                fontWeight: "500",
                opacity: 0.8,
              }}
            >
              {item.subtext}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

// 3. Projects Content
const ProjectsContent = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "A full-stack e-commerce application with cart management, payment integration, and admin dashboard.",
      tech: [
        "React",
        "Node.js",
        "Supabase",
        "Momo Pay",
        "Socket.io",
        "Express.js",
      ],
      link: "https://sport-gear-e-commerce-platform-d34b.vercel.app/",
    },
    {
      title: "Task Management App",
      desc: "Real-time task management application with team collaboration features and progress tracking.",
      tech: ["Node.js", "Express.js", "Supabase", "HTML/CSS", "EJS"],
      link: "https://to-do-app-dzlm.onrender.com/",
    },
    {
      title: "Hotel Booking System",
      desc: "A hotel booking web application with room availability, booking management, and user reviews.",
      tech: ["React", "Supabase", "Tailwind CSS", "Node.js", "Express.js"],
      link: "https://booking-hotel-platform-one.vercel.app/",
    },
  ];

  return (
    <div style={{ animation: "fadeIn 0.5s ease-in-out" }}>
      {/* 1. Tiêu đề mục */}
      <h3
        style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          color: "#ffffff",
          marginBottom: "1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        Featured Projects
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#1c1f26",
              border: "1px solid #2d3342",
              borderRadius: "12px",
              padding: "1.5rem",
              textDecoration: "none",
              transition: "all 0.3s",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              position: "relative", // Để xử lý hiệu ứng hover
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#38bdf8";
              e.currentTarget.style.transform = "translateY(-4px)";
              // Tìm phần tử text "Click to experience..." để đổi màu
              const cta = e.currentTarget.querySelector(".cta-text");
              if (cta) cta.style.color = "#38bdf8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#2d3342";
              e.currentTarget.style.transform = "translateY(0)";
              const cta = e.currentTarget.querySelector(".cta-text");
              if (cta) cta.style.color = "#9ca3af";
            }}
          >
            {/* Tên Project */}
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "700",
                color: "#ffffff",
                margin: 0,
              }}
            >
              {project.title}
            </h3>

            {/* Mô tả */}
            <p
              style={{
                color: "#9ca3af",
                fontSize: "0.95rem",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              {project.desc}
            </p>

            {/* Tech Stack */}
            <div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    style={{
                      background: "rgba(56, 189, 248, 0.1)",
                      color: "#38bdf8",
                      fontSize: "0.8rem",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "20px",
                      fontWeight: "500",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* 2. Dòng chữ Click to experience */}
            <div
              className="cta-text" // Class để dễ querySelector khi hover
              style={{
                marginTop: "auto", // Đẩy xuống đáy
                paddingTop: "1rem",
                borderTop: "1px solid #2d3342",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#9ca3af", // Màu mặc định
                transition: "color 0.3s",
              }}
            >
              <span>Click to experience the website</span>
              <ExternalLink size={14} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

// 4. Contact Content
const ContactContent = () => {
  const contactInfo = [
    {
      icon: Mail,
      text: "ducp07052@gmail.com",
      link: "mailto:ducp07052@gmail.com",
    },
    {
      icon: Phone,
      text: "0398399540", // Thay số điện thoại của bạn vào đây
      link: "tel:0398399540", // Thay số điện thoại vào đây (viết liền không khoảng cách)
    },
    {
      icon: Github,
      text: "github.com/ducpham211",
      link: "https://github.com/ducpham211",
    },
  ];

  return (
    <div style={{ animation: "fadeIn 0.5s ease-in-out" }}>
      <p style={{ color: "#9ca3af", marginBottom: "2rem", fontSize: "1.1rem" }}>
        Interested in working together? Let's connect.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {contactInfo.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target={contact.icon === Github ? "_blank" : "_self"} // Github mở tab mới, còn lại mở trực tiếp
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              color: "#ffffff",
              textDecoration: "none", // Bỏ gạch chân mặc định của thẻ a
              width: "fit-content", // Chỉ rộng bằng nội dung để hover đẹp hơn
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#38bdf8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
          >
            <contact.icon size={20} color="#38bdf8" />
            <span style={{ fontSize: "1rem" }}>{contact.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
const TabbedInfoSection = () => {
  const [activeTab, setActiveTab] = useState("projects"); // Mặc định hiển thị Projects

  const tabs = [
    { id: "education", label: "Education" },
    { id: "achievements", label: "Achievements" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
    { id: "about", label: "About Me" },
  ];

  // Hàm render nội dung dựa trên tab đang chọn
  const renderContent = () => {
    switch (activeTab) {
      case "education":
        return <EducationContent />;
      case "achievements":
        return <AchievementContent />;
      case "projects":
        return <ProjectsContent />;
      case "contact":
        return <ContactContent />;
      case "about":
        return <AboutContent />;
      default:
        return null;
    }
  };

  return (
    <section style={{ padding: "4rem 0", minHeight: "600px" }}>
      <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 2rem" }}>
        {/* --- THANH NAVIGATION (TABS) --- */}
        <div
          style={{
            display: "flex",
            gap: "2rem",
            borderBottom: "1px solid #2d3342",
            marginBottom: "3rem",
            overflowX: "auto", // Cho phép cuộn ngang trên mobile
            paddingBottom: "1px",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: "none",
                border: "none",
                padding: "0 0 1rem 0",
                fontSize: "1rem",
                fontWeight: activeTab === tab.id ? "600" : "500",
                color: activeTab === tab.id ? "#38bdf8" : "#9ca3af",
                cursor: "pointer",
                borderBottom:
                  activeTab === tab.id
                    ? "2px solid #38bdf8"
                    : "2px solid transparent",
                transition: "all 0.3s",
                whiteSpace: "nowrap",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* --- KHU VỰC HIỂN THỊ NỘI DUNG --- */}
        <div style={{ minHeight: "300px" }}>{renderContent()}</div>
      </div>

      {/* Style cho animation fade-in */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer
      style={{
        borderTop: "1px solid #2d3342",
        padding: "2rem 0",
        textAlign: "center",
        color: "#9ca3af",
      }}
    >
      <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 2rem" }}>
        <p>@Copyright by Pham Viet Duc</p>
      </div>
    </footer>
  );
};

const Portfolio = () => {
  return (
    <div
      style={{
        background: "#0f1115",
        color: "#ffffff",
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        minHeight: "100vh",
      }}
    >
      <HeroSection />

      <TabbedInfoSection />

      <Footer />
    </div>
  );
};

export default Portfolio;
