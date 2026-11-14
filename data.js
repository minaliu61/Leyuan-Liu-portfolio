// Edit this file to maintain your public portfolio content.
window.SITE_DATA = {
  showPhone: true,
  phone: "(+86)17817281152",
  profile: { name: "刘乐媛", enName: "Leyuan Liu", email: "minaliu561@gmail.com" },

  experiences: [
    {
      date: "2026.03 — 2026.06", company: "广州市森大贸易有限公司", companyEn: "Guangzhou SUNDA Int'l Trading Co., Ltd.",
      role: "供应链部｜船务数据实习生", roleEn: "Supply Chain Department | Shipping Data Intern",
      title: "供应链履约监控与数据流程优化", titleEn: "Supply Chain Performance Monitoring & Process Optimization",
      bullets: [
        ["针对 ETA 报表流程繁琐、数据分散的问题，重构 <b>30+ 步</b>操作流程，整合 <b>15+ 个</b>分散文件至 <b>5 个</b>规范化文件；每周处理 <b>5,000+ 条</b> SO 订单记录，将纯人工报表制作时间由 3 小时缩短至 <b>1.5 小时</b>，效率提升 <b>50%</b>；优化流程连续应用 <b>10 周</b>，交付 10 份周报。",
         "Redesigned a 30+ step ETA reporting workflow and consolidated 15+ scattered files into 5 standardized files. Processed 5,000+ SO records weekly, reducing manual report preparation from 3 hours to 1.5 hours (<b>50% faster</b>). The optimized workflow ran for <b>10 consecutive weeks</b>, producing 10 weekly reports."],
        ["自主设计 ETA 偏差分级规则、条件格式预警及数据透视分析机制，每周识别 <b>800+ 条</b>延期订单；负责异常记录复核、ETA 更新及信息反馈，协同计划、销售跟进履约风险。",
         "Designed ETA deviation tiers, conditional-format alerts and pivot-based analysis to identify <b>800+ delayed orders per week</b>. Reviewed exceptions, updated ETAs and coordinated with planning and sales teams on fulfillment risks."],
        ["独立设计多源数据清洗、字段标准化及自动匹配方案，整合 3 家船公司数据，运用 XLOOKUP、INDEX+MATCH 搭建 Excel 自动匹配模板；每周查询处理量由约 1,500 条提升至 <b>17,000+ 条</b>，自动匹配率达 <b>50%–70%</b>，沉淀可复用模板及 SOP。",
         "Built a multi-source data-cleaning, field-standardization and matching workflow for data from 3 shipping lines. Developed Excel templates using XLOOKUP and INDEX+MATCH, increasing weekly query throughput from about 1,500 to <b>17,000+ records</b>, with a <b>50%–70%</b> auto-match rate; documented reusable templates and SOPs."],
        ["担任第三方数据平台业务对接窗口，累计反馈 <b>6 次</b>问题，协同平台 IT 及内部团队推动航线识别、查询数量限制、统计口径差异等 <b>3 类</b>问题得到处理；每周使用 SAP 查询采购订单、物料及供应商信息，核对约 10 笔采购账单。",
         "Served as the business contact for a third-party data platform, raising <b>6 issue reports</b> and coordinating resolution of <b>3 issue types</b>. Used SAP weekly to retrieve purchase orders, materials and supplier data, and checked around 10 procurement invoices."],
        ["承担查询任务分配、交付进度跟踪及 ETA 数据复核；面对查询量激增，向 mentor 汇报资源瓶颈并按调整后的范围推进交付；完成接手人员培训与 SOP 交接，优化流程由 <b>2 名专员及 3 名实习生</b>使用。",
         "Coordinated task allocation, delivery tracking and ETA data checks. Escalated capacity constraints during demand spikes, then delivered against revised scope. Trained successors and handed over SOPs adopted by <b>2 specialists and 3 interns</b>."]
      ]
    },
    {
      date: "2025.10 — 2025.11", company: "第 138 届中国进出口商品交易会", companyEn: "The 138th China Import and Export Fair (Canton Fair)",
      role: "展会协助志愿者", roleEn: "Exhibition Support Volunteer",
      title: "现场服务与跨文化沟通", titleEn: "On-site Support & Cross-cultural Communication",
      bullets: [
        ["为境内采购商及涉外客商提供证件办理、扫码注册、流程指引及现场咨询服务，协助线下缴费与证件发放，累计服务 <b>100 小时</b>。",
         "Assisted domestic buyers and international visitors with badge applications, QR-code registration, process guidance and on-site inquiries; supported offline payments and badge distribution, contributing <b>100 service hours</b>."]
      ]
    }
  ],

  projects: [
    {
      id:"used-car-price",
      category:"Data Science", date:"2026.05 — 2026.07",
      title:"二手车交易价格预测与建模分析", enTitle:"Used-Car Price Prediction & Modeling Analysis",
      subtitle:"阿里云天池数据分析项目｜负责人", enSubtitle:"Alibaba Cloud Tianchi Data Analytics Project | Team Lead",
      intro:"基于阿里云天池二手车交易数据集（训练集 <b>15 万条</b>，测试集 A/B 各 <b>5 万条</b>），开展数据探索、特征工程及机器学习建模，构建价格预测模型。",
      enIntro:"Developed used-car price prediction models using the Alibaba Cloud Tianchi dataset (<b>150,000</b> training records and <b>50,000</b> records in each A/B test set), covering exploratory analysis, feature engineering and machine learning.",
      cover:"assets/project-car-cover.jpg", // 建议加一张项目封面图
      video:"", 
      gallery:[], 
      docs:[], 
      outcomes:[
        ["0.9687","0.9687","XGBoost 模型 R²","XGBoost model R²"],
        ["566.01 元","RMB 566.01","XGBoost MAE（调参后）","XGBoost MAE (tuned)"],
        ["71.8%","71.8%","随机森林较线性回归 MAE 降幅","Random Forest MAE reduction vs. Linear Regression"],
        ["15 万条","150,000","训练集样本量","Training records"]
      ],
      bullets:[
        ["使用 Python、Pandas 完成数据清洗与探索性分析，以众数、中位数填补缺失值，处理零功率、负价格及极端价格等异常数据；对高基数类别特征进行标签编码，对数值特征进行 Z-score 标准化。",
         "Cleaned and explored data with Python and Pandas; imputed missing values with mode/median, handled anomalous records and applied label encoding and Z-score standardization."],
        ["通过相关性分析发现匿名特征 v_12 与交易价格呈较强正相关，相关系数 <b>r=0.795</b>。",
         "Identified a strong positive correlation between anonymous feature v_12 and transaction price (<b>r = 0.795</b>)."],
        ["建立线性回归、决策树、随机森林、XGBoost 及 LightGBM 模型，采用 MAE、RMSE 评估；使用网格搜索优化 XGBoost，并以贝叶斯优化调整 LightGBM。",
         "Compared Linear Regression, Decision Tree, Random Forest, XGBoost and LightGBM using MAE and RMSE; tuned XGBoost with grid search and LightGBM with Bayesian optimization."],
        ["随机森林 MAE 达到 <b>619.54 元</b>，较线性回归降低 <b>71.8%</b>；调参后 XGBoost MAE 从 627.13 元降至 <b>566.01 元</b>（降低 <b>9.75%</b>），<b>R²=0.9687</b>；LightGBM MAE 从 655.59 元降至 <b>595.85 元</b>（降低 <b>9.11%</b>），<b>R²=0.9677</b>。综合表现选取 <b>XGBoost</b> 为最优模型。",
         "Random Forest achieved an MAE of <b>RMB 619.54</b>, <b>71.8%</b> lower than Linear Regression. Tuned XGBoost reduced MAE from 627.13 to <b>566.01</b> (<b>9.75%</b>), with <b>R² = 0.9687</b>; LightGBM reduced MAE from 655.59 to <b>595.85</b> (<b>9.11%</b>), with <b>R² = 0.9677</b>. <b>XGBoost</b> was selected as the best-performing model."]
      ],
      tech:["Python","Pandas","NumPy","Scikit-learn","XGBoost","LightGBM"]
    },
    {
      id:"recommendation-segmentation",
      category:"Data Science", date:"2025.05 — 2025.06",
      title:"推荐与个性化分层策略", enTitle:"Recommendation & Personalized Segmentation Strategy",
      subtitle:"算法实现", enSubtitle:"Algorithm Implementation",
      intro:"基于 MovieLens 数据集（约 <b>2,000 万条</b>评分记录、<b>2.7 万部</b>电影），分析用户兴趣差异并构建个性化推荐策略。",
      enIntro:"Used the MovieLens dataset (approximately <b>20 million</b> ratings across <b>27,000</b> films) to analyze differences in user preferences and develop personalized recommendation strategies.",
      cover:"", video:"assets/project-video.mp4", // 把视频放 assets 里，文件名为 project-video.mp4
      gallery:[], docs:[],
      outcomes:[
        ["2,000 万条","20M","评分记录","Ratings"],
        ["2.7 万部","27,000","电影数量","Films"],
        ["Top-5","Top-5","推荐输出","Recommendations"]
      ],
      bullets:[
        ["使用 Python、Pandas 完成数据清洗、整理及探索性数据分析，挖掘用户评分行为与电影偏好特征，分析用户兴趣相似性。",
         "Performed data cleaning and exploratory analysis with Python and Pandas to identify rating behavior, movie preferences and user-interest similarities."],
        ["基于协同过滤算法构建推荐模型，对比 Pearson 相关系数、余弦相似度及欧氏距离；采用 MSE、RMSE、MAE 评估模型，并根据用户历史评分生成 <b>Top-5 推荐</b>。",
         "Built a collaborative-filtering recommender and compared Pearson correlation, cosine similarity and Euclidean distance. Evaluated with MSE, RMSE and MAE, and generated <b>Top-5 recommendations</b> from historical ratings."],
        ["完成从用户行为数据处理、偏好挖掘、相似度计算到推荐结果输出的完整流程，为用户分层运营及精准推荐提供分析思路。",
         "Completed an end-to-end workflow from behavior-data processing and preference mining to similarity computation and recommendation output, informing user segmentation and targeted recommendation."]
      ],
      tech:["Python","Pandas","NumPy","Collaborative Filtering"]
    },
    {
      id:"instant-ecommerce-orders",
      category:"Software", date:"2025.10 — 2025.12",
      title:"即时电商订单全流程架构设计", enTitle:"End-to-end Architecture for Instant E-commerce Orders",
      subtitle:"Java 全栈开发项目｜项目负责人", enSubtitle:"Java Full-stack Development Project | Team Lead",
      intro:"围绕用户、商家及骑手多角色协作，梳理即时电商业务流程，参与系统架构、数据库设计及前后端功能开发。",
      enIntro:"Mapped workflows across customers, merchants and couriers, and contributed to system architecture, database design, and front-end/back-end development for an instant-commerce platform.",
      cover:"", video:"", gallery:[], docs:[],
      outcomes:[
        ["4 大模块","4 modules","履约 / 评价 / 仲裁 / 结算","Fulfillment / Reviews / Arbitration / Settlement"],
        ["ER 图 + PRD","ER diagram + PRD","完整设计交付物","Complete design deliverables"]
      ],
      bullets:[
        ["组织梳理多角色业务需求及功能模块，绘制业务流程图、活动图、用例图及类设计图，明确核心流程与模块关系。",
         "Organized multi-role requirements and functional modules; produced business process, activity, use-case and class design diagrams."],
        ["参与 MySQL 数据库设计与多表建模，梳理用户、商品、订单、配送等业务实体及关联关系，绘制 ER 图。",
         "Contributed to MySQL schema design and relational data modeling for users, products, orders and delivery, including ER diagrams."],
        ["基于 Spring Boot + MyBatis 参与后端业务逻辑与数据库交互开发；使用 HTML、CSS、JavaScript 参与前端页面及交互功能开发，并完成前后端联调。",
         "Implemented back-end business logic and database interactions with Spring Boot and MyBatis; contributed to front-end pages and interactions using HTML, CSS and JavaScript."],
        ["围绕下单、派单、配送、结单梳理订单状态流转，参与订单履约、双向评价、售后仲裁、商家结算<b>四大模块</b>设计；完成 PRD、业务流程及系统设计图，并参与功能演示视频制作。",
         "Designed order-state transitions across placement, dispatch, delivery and completion; contributed to fulfillment, two-way reviews, after-sales arbitration and merchant settlement modules. Produced the PRD, workflow/system diagrams and a project demo video."]
      ],
      tech:["Java","Spring Boot","MyBatis","MySQL","HTML","CSS","JavaScript"]
    }
  ],

  // 证书数据：增加了第5个参数为图片路径（放在 assets 目录下）
  credentials:[
    ["计算机二级（MS）","Computer Level 2 (MS)","专业技能证书","CERTIFICATE","assets/cert-cet2.jpg"],
    ["普通话二级甲等","Putonghua Proficiency Test — Level 2-A","语言能力","LANGUAGE","assets/cert-putonghua.jpg"],
    ["大学英语四级：539","CET-4: 539","英语能力","LANGUAGE",""],
    ["大学英语六级：456","CET-6: 456","英语能力","LANGUAGE","assets/cert-cet6.jpg"],
    ["粤语母语水平","Native-level Cantonese","语言能力","LANGUAGE",""],
    ["互联网办公技能水平大赛 优秀学员","Internet Office Skills Competition — Outstanding Student","竞赛奖项","AWARD","assets/cert-office.jpg"],
    ["全国大学生学术英语词汇赛前置赛 优秀学员","National Academic English Vocabulary Contest — Outstanding Student","竞赛奖项","AWARD","assets/cert-vocab.jpg"],
    ["2026年第六届全国大学生人工智能知识竞赛 一等奖","6th National College AI Knowledge Competition — First Prize","竞赛奖项","AWARD","assets/cert-ai.jpg"],
    ["校三等奖学金 (2024-2025)","University Third-class Scholarship (2024-2025)","校级荣誉","HONOR","assets/cert-scholarship.jpg"],
    ["外教社杯英语竞赛 省级三等奖","Provincial Third Prize — SFLEP English Competition","竞赛奖项","AWARD",""],
    ["优秀团干","Outstanding League Cadre","校级荣誉","HONOR",""]
  ],

  skills:[
    ["数据分析与 Excel","Data Analytics & Excel","熟练使用 XLOOKUP、VLOOKUP、INDEX+MATCH、COUNTIFS、IFERROR、数据透视表及条件格式；具备<b>大批量数据清洗</b>、跨表匹配与异常分析经验。","Proficient with XLOOKUP, VLOOKUP, INDEX+MATCH, COUNTIFS, IFERROR, PivotTables and conditional formatting; experienced in <b>large-scale data cleaning</b>, cross-table matching and exception analysis."],
    ["Python 与机器学习","Python & Machine Learning","使用 Python、Pandas、NumPy、Scikit-learn 进行数据清洗、探索性分析、特征工程、<b>回归建模及模型评估</b>。","Use Python, Pandas, NumPy and Scikit-learn for data cleaning, exploratory analysis, feature engineering, <b>regression modeling and model evaluation</b>."],
    ["数据库与数据建模","Database & Data Modeling","使用 MySQL 进行数据库设计与业务数据建模，具备 <b>ER 图绘制</b>、多表关系梳理及业务数据结构设计经验。","Use MySQL for database design and business data modeling; experienced in <b>ER diagrams</b>, relational schema design and data-structure planning."],
    ["Java 与后端开发","Java & Back-end Development","具备 Java 项目实践经验，使用 Spring Boot、MyBatis 参与业务功能开发、数据库访问及前后端联调。","Project experience with Java, Spring Boot and MyBatis, including business features, database access and front-/back-end integration."],
    ["Web 前端开发","Web Front-end Development","使用 HTML、CSS、JavaScript 参与前端页面及交互功能开发。","Contributed to web pages and interactive features using HTML, CSS and JavaScript."],
    ["供应链与 ERP","Supply Chain & ERP","具备 <b>ETA 跟踪、订单履约监控、延期风险识别</b>、SOP 优化及跨团队协同经验；使用 SAP 查询采购订单、物料及供应商信息并核对账单。","Experienced in <b>ETA tracking, order-fulfillment monitoring and delay-risk identification</b>, SOP optimization and cross-team coordination; used SAP to retrieve purchasing, material and supplier information and verify invoices."]
  ]
};

window.I18N = {
zh:{
  navAbout:"关于",navExperience:"经历",navProjects:"项目",navCredentials:"证书与荣誉",navSkills:"技能",navVault:"数字资产库",
  heroEyebrow:"个人作品集 · 数字档案",heroHello:"你好，我是",
  heroLead:"数据科学与大数据技术本科生，关注数据分析、数据建模与供应链方向。",
  viewProjects:"查看项目",moreAbout:"了解更多",profileCard:"个人档案",
  studentRole:"数据科学与大数据技术 · 本科生",locationLabel:"学校",schoolShort:"广东金融学院",
  gradLabel:"预计毕业",emailLabel:"邮箱",
  metric1:"ETA 报表制作时间缩短",metric2:"每周运价查询处理量",metric3:"XGBoost 项目 R²",metric4:"数据与开发项目",
  aboutTitle:"关于我",aboutIntro:"将数据能力与业务理解结合，关注可落地的问题解决方案。",
  educationTitle:"教育背景",university:"广东金融学院",major:"数据科学与大数据技术 · 本科",
  courses:"主修课程：数据分析、数据建模、数据可视化、Python 程序设计项目课程、Java 程序设计项目课程等。",
  contactTitle:"联系信息",copyEmail:"复制邮箱 ↗",
  experienceTitle:"实习与实践经历",experienceIntro:"流程优化、数据运营与现场服务。",
  projectsTitle:"项目经历",projectsIntro:"从数据探索、模型评估到业务系统设计。",
  searchPlaceholder:"搜索项目、技术栈或关键词…",
  credentialsTitle:"证书与荣誉",credentialsIntro:"可继续上传证书扫描件、照片或相关证明。点击可查看大图。",
  skillsTitle:"专业技能",skillsIntro:"围绕数据处理、业务分析与应用开发形成的实践能力。",
  vaultTitle:"个人数字资产库",vaultIntro:"添加证书、项目演示、照片与视频；文件保存在当前浏览器中。",
  addMedia:"添加照片 / 视频 / 文件",exportData:"导出档案 JSON",importData:"导入档案 JSON",
  emptyMedia:"还没有上传媒体文件。",
  footerText:"持续更新 · 保持好奇 · 用数据解决问题",
  all:"全部",data:"数据分析",software:"软件开发",copyDone:"邮箱已复制",delete:"删除",
  vaultLocked:"为了保护隐私，此处已锁定。请输入管理员密码。",
  vaultPasswordPlaceholder:"请输入管理员密码",vaultUnlock:"解锁",vaultWrong:"密码不正确，请重试。",
  noProjects:"没有匹配的项目。",viewDetail:"查看详情 ↗",
  backToProjects:"返回项目列表",detailGallery:"项目照片与演示",detailOutcomes:"项目成果",
  detailDocs:"技术文档",detailProcess:"项目说明",
  galleryEmpty:"暂未上传照片或视频。",docsEmpty:"暂未上传技术文档。",notFound:"未找到该项目。"
},
en:{
  navAbout:"About",navExperience:"Experience",navProjects:"Projects",navCredentials:"Credentials",navSkills:"Skills",navVault:"Digital Vault",
  heroEyebrow:"PORTFOLIO · DIGITAL ARCHIVE",heroHello:"Hello, I'm",
  heroLead:"An undergraduate in Data Science and Big Data Technology, focused on data analytics, data modeling and supply chain.",
  viewProjects:"Explore Projects",moreAbout:"About Me",profileCard:"PROFILE",
  studentRole:"Data Science & Big Data Technology · Undergraduate",locationLabel:"UNIVERSITY",schoolShort:"Guangdong University of Finance",
  gradLabel:"GRADUATION",emailLabel:"EMAIL",
  metric1:"Less manual ETA reporting time",metric2:"Weekly freight queries processed",metric3:"XGBoost project R²",metric4:"Data & software projects",
  aboutTitle:"About Me",aboutIntro:"Combining data capabilities with business understanding to solve practical problems.",
  educationTitle:"Education",university:"Guangdong University of Finance",major:"BSc in Data Science and Big Data Technology",
  courses:"Relevant coursework: Data Analytics, Data Modeling, Data Visualization, Python Programming Project, Java Programming Project, and more.",
  contactTitle:"Contact",copyEmail:"Copy email ↗",
  experienceTitle:"Experience",experienceIntro:"Process optimization, data operations and on-site support.",
  projectsTitle:"Selected Projects",projectsIntro:"From exploratory analysis and model evaluation to business system design.",
  searchPlaceholder:"Search projects, technologies or keywords…",
  credentialsTitle:"Credentials & Awards",credentialsIntro:"Upload certificate scans, photos or supporting documents as needed. Click to enlarge.",
  skillsTitle:"Skills",skillsIntro:"Practical capabilities across data processing, business analysis and application development.",
  vaultTitle:"Personal Digital Asset Vault",vaultIntro:"Add certificates, project demos, photos and videos; files are stored in this browser.",
  addMedia:"Add photos / videos / files",exportData:"Export archive JSON",importData:"Import archive JSON",
  emptyMedia:"No media uploaded yet.",
  footerText:"Keep learning · Stay curious · Solve problems with data",
  all:"All",data:"Data Science",software:"Software",copyDone:"Email copied",delete:"Delete",
  vaultLocked:"Locked for privacy. Please enter the admin password.",
  vaultPasswordPlaceholder:"Enter admin password",vaultUnlock:"Unlock",vaultWrong:"Incorrect password. Please try again.",
  noProjects:"No matching projects.",viewDetail:"View details ↗",
  backToProjects:"Back to projects",detailGallery:"Photos & Demos",detailOutcomes:"Key Outcomes",
  detailDocs:"Technical Documents",detailProcess:"Project Details",
  galleryEmpty:"No photos or videos uploaded yet.",docsEmpty:"No documents uploaded yet.",notFound:"Project not found."
}
};
