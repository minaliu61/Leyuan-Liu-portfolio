// Edit this file to maintain your public portfolio content.
window.SITE_DATA = {
  showPhone: false, // Set true only if you intentionally want your phone number public.
  phone: "+86 178 1728 1152",
  profile: { name: "刘乐媛", enName: "Leyuan Liu", email: "minaliu561@gmail.com" },
  experiences: [
    {
      date: "2026.03 — 2026.06", company: "广州市森大贸易有限公司", companyEn: "Guangzhou SUNDA Int'l Trading Co., Ltd.",
      role: "供应链部｜船务数据实习生", roleEn: "Supply Chain Department | Shipping Data Intern",
      title: "供应链履约监控与数据流程优化", titleEn: "Supply Chain Performance Monitoring & Process Optimization",
      bullets: [
        ["针对 ETA 报表流程繁琐、数据分散的问题，重构 30+ 步操作流程，整合 15+ 个分散文件至 5 个规范化文件；每周处理 5,000+ 条 SO 订单记录，将纯人工报表制作时间由 3 小时缩短至 1.5 小时，效率提升 50%；优化流程连续应用 10 周，交付 10 份周报。",
         "Redesigned a 30+ step ETA reporting workflow and consolidated 15+ scattered files into 5 standardized files. Processed 5,000+ SO records weekly, reducing manual report preparation from 3 hours to 1.5 hours (50% faster). The optimized workflow was used for 10 consecutive weeks, producing 10 weekly reports."],
        ["自主设计 ETA 偏差分级规则、条件格式预警及数据透视分析机制，每周识别 800+ 条延期订单；负责异常记录复核、ETA 更新及信息反馈，协同计划、销售跟进履约风险。",
         "Designed ETA deviation tiers, conditional-format alerts and pivot-based analysis to identify 800+ delayed orders per week. Reviewed exceptions, updated ETAs and coordinated with planning and sales teams on fulfillment risks."],
        ["独立设计多源数据清洗、字段标准化及自动匹配方案，整合 3 家船公司数据，运用 XLOOKUP、INDEX+MATCH 搭建 Excel 自动匹配模板；每周查询处理量由约 1,500 条提升至 17,000+ 条，自动匹配率达 50%–70%，沉淀可复用模板及 SOP。",
         "Built a multi-source data-cleaning, field-standardization and matching workflow for data from 3 shipping lines. Developed Excel templates using XLOOKUP and INDEX+MATCH, increasing weekly query throughput from about 1,500 to 17,000+ records, with a 50%–70% auto-match rate; documented reusable templates and SOPs."],
        ["担任第三方数据平台业务对接窗口，累计反馈 6 次问题，协同平台 IT 及内部团队推动航线识别、查询数量限制、统计口径差异等 3 类问题得到处理；每周使用 SAP 查询采购订单、物料及供应商信息，核对约 10 笔采购账单。",
         "Served as the business contact for a third-party data platform, raising 6 issue reports and coordinating resolution of 3 issue types. Used SAP weekly to retrieve purchase orders, materials and supplier data, and checked around 10 procurement invoices."],
        ["承担查询任务分配、交付进度跟踪及 ETA 数据复核；面对查询量激增，向 mentor 汇报资源瓶颈并按调整后的范围推进交付；完成接手人员培训与 SOP 交接，优化流程由 2 名专员及 3 名实习生使用。",
         "Coordinated task allocation, delivery tracking and ETA data checks. Escalated capacity constraints during demand spikes, then delivered against revised scope. Trained successors and handed over SOPs adopted by 2 specialists and 3 interns."]
      ]
    },
    {
      date: "2025.10 — 2025.11", company: "第 138 届中国进出口商品交易会", companyEn: "The 138th China Import and Export Fair (Canton Fair)",
      role: "展会协助志愿者", roleEn: "Exhibition Support Volunteer",
      title: "现场服务与跨文化沟通", titleEn: "On-site Support & Cross-cultural Communication",
      bullets: [
        ["为境内采购商及涉外客商提供证件办理、扫码注册、流程指引及现场咨询服务，协助线下缴费与证件发放，累计服务 100 小时。",
         "Assisted domestic buyers and international visitors with badge applications, QR-code registration, process guidance and on-site inquiries; supported offline payments and badge distribution, contributing 100 service hours."]
      ]
    }
  ],
  projects: [
    {
      category:"Data Science", date:"2026.05 — 2026.07", title:"二手车交易价格预测与建模分析", enTitle:"Used-Car Price Prediction & Modeling Analysis",
      subtitle:"阿里云天池数据分析项目｜负责人", enSubtitle:"Alibaba Cloud Tianchi Data Analytics Project | Team Lead",
      intro:"基于阿里云天池二手车交易数据集（训练集 15 万条，测试集 A/B 各 5 万条），开展数据探索、特征工程及机器学习建模，构建价格预测模型。",
      enIntro:"Developed used-car price prediction models using the Alibaba Cloud Tianchi dataset (150,000 training records and 50,000 records in each A/B test set), covering exploratory analysis, feature engineering and machine learning.",
      bullets:[
        ["使用 Python、Pandas 完成数据清洗与探索性分析，以众数、中位数填补缺失值，处理零功率、负价格及极端价格等异常数据；对高基数类别特征进行标签编码，对数值特征进行 Z-score 标准化。",
         "Cleaned and explored data with Python and Pandas; imputed missing values with mode/median, handled anomalous records and applied label encoding and Z-score standardization."],
        ["通过相关性分析发现匿名特征 v_12 与交易价格呈较强正相关，相关系数 r=0.795。",
         "Identified a strong positive correlation between anonymous feature v_12 and transaction price (r = 0.795)."],
        ["建立线性回归、决策树、随机森林、XGBoost 及 LightGBM 模型，采用 MAE、RMSE 评估；使用网格搜索优化 XGBoost，并以贝叶斯优化调整 LightGBM。",
         "Compared Linear Regression, Decision Tree, Random Forest, XGBoost and LightGBM using MAE and RMSE; tuned XGBoost with grid search and LightGBM with Bayesian optimization."],
        ["随机森林 MAE 达到 619.54 元，较线性回归降低 71.8%；调参后 XGBoost MAE 从 627.13 元降至 566.01 元（降低 9.75%），R²=0.9687；LightGBM MAE 从 655.59 元降至 595.85 元（降低 9.11%），R²=0.9677。综合表现选取 XGBoost 为最优模型。",
         "Random Forest achieved an MAE of RMB 619.54, 71.8% lower than Linear Regression. Tuned XGBoost reduced MAE from 627.13 to 566.01 (9.75%), with R² = 0.9687; LightGBM reduced MAE from 655.59 to 595.85 (9.11%), with R² = 0.9677. XGBoost was selected as the best-performing model."]
      ],
      tech:["Python","Pandas","NumPy","Scikit-learn","XGBoost","LightGBM"]
    },
    {
      category:"Data Science", date:"2025.05 — 2025.06", title:"推荐与个性化分层策略", enTitle:"Recommendation & Personalized Segmentation Strategy",
      subtitle:"算法实现", enSubtitle:"Algorithm Implementation",
      intro:"基于 MovieLens 数据集（约 2,000 万条评分记录、2.7 万部电影），分析用户兴趣差异并构建个性化推荐策略。",
      enIntro:"Used the MovieLens dataset (approximately 20 million ratings across 27,000 films) to analyze differences in user preferences and develop personalized recommendation strategies.",
      bullets:[
        ["使用 Python、Pandas 完成数据清洗、整理及探索性数据分析，挖掘用户评分行为与电影偏好特征，分析用户兴趣相似性。",
         "Performed data cleaning and exploratory analysis with Python and Pandas to identify rating behavior, movie preferences and user-interest similarities."],
        ["基于协同过滤算法构建推荐模型，对比 Pearson 相关系数、余弦相似度及欧氏距离；采用 MSE、RMSE、MAE 评估模型，并根据用户历史评分生成 Top-5 推荐。",
         "Built a collaborative-filtering recommender and compared Pearson correlation, cosine similarity and Euclidean distance. Evaluated with MSE, RMSE and MAE, and generated Top-5 recommendations from historical ratings."],
        ["完成从用户行为数据处理、偏好挖掘、相似度计算到推荐结果输出的完整流程，为用户分层运营及精准推荐提供分析思路。",
         "Completed an end-to-end workflow from behavior-data processing and preference mining to similarity computation and recommendation output, informing user segmentation and targeted recommendation."]
      ],
      tech:["Python","Pandas","NumPy","Collaborative Filtering"]
    },
    {
      category:"Software", date:"2025.10 — 2025.12", title:"即时电商订单全流程架构设计", enTitle:"End-to-end Architecture for Instant E-commerce Orders",
      subtitle:"Java 全栈开发项目｜项目负责人", enSubtitle:"Java Full-stack Development Project | Team Lead",
      intro:"围绕用户、商家及骑手多角色协作，梳理即时电商业务流程，参与系统架构、数据库设计及前后端功能开发。",
      enIntro:"Mapped workflows across customers, merchants and couriers, and contributed to system architecture, database design, and front-end/back-end development for an instant-commerce platform.",
      bullets:[
        ["组织梳理多角色业务需求及功能模块，绘制业务流程图、活动图、用例图及类设计图，明确核心流程与模块关系。",
         "Organized multi-role requirements and functional modules; produced business process, activity, use-case and class design diagrams."],
        ["参与 MySQL 数据库设计与多表建模，梳理用户、商品、订单、配送等业务实体及关联关系，绘制 ER 图。",
         "Contributed to MySQL schema design and relational data modeling for users, products, orders and delivery, including ER diagrams."],
        ["基于 Spring Boot + MyBatis 参与后端业务逻辑与数据库交互开发；使用 HTML、CSS、JavaScript 参与前端页面及交互功能开发，并完成前后端联调。",
         "Implemented back-end business logic and database interactions with Spring Boot and MyBatis; contributed to front-end pages and interactions using HTML, CSS and JavaScript."],
        ["围绕下单、派单、配送、结单梳理订单状态流转，参与订单履约、双向评价、售后仲裁、商家结算四大模块设计；完成 PRD、业务流程及系统设计图，并参与功能演示视频制作。",
         "Designed order-state transitions across placement, dispatch, delivery and completion; contributed to fulfillment, two-way reviews, after-sales arbitration and merchant settlement modules. Produced the PRD, workflow/system diagrams and a project demo video."]
      ],
      tech:["Java","Spring Boot","MyBatis","MySQL","HTML","CSS","JavaScript"]
    }
  ],
  credentials:[
    ["计算机二级（MS）","Computer Level 2 (MS)","专业技能证书","CERTIFICATE"],
    ["普通话二级甲等","Putonghua Proficiency Test — Level 2-A","语言能力","LANGUAGE"],
    ["大学英语四级：539","CET-4: 539","英语能力","LANGUAGE"],
    ["大学英语六级：456","CET-6: 456","英语能力","LANGUAGE"],
    ["粤语母语水平","Native-level Cantonese","语言能力","LANGUAGE"],
    ["互联网办公技能水平大赛 全国一等奖","National First Prize — Internet Office Skills Competition","竞赛奖项","AWARD"],
    ["第十一届全国大学生学术英语词汇赛前置赛 全国一等奖","National First Prize — 11th National College Academic English Vocabulary Contest (Preliminary)","竞赛奖项","AWARD"],
    ["外教社杯英语竞赛 省级三等奖","Provincial Third Prize — SFLEP English Competition","竞赛奖项","AWARD"],
    ["校二等奖学金（按提供资料列示 2 次）","University Second-class Scholarship (listed twice in source information)","校级荣誉","HONOR"],
    ["优秀团干","Outstanding League Cadre","校级荣誉","HONOR"]
  ],
  skills:[
    ["数据分析与 Excel","Data Analytics & Excel","熟练使用 XLOOKUP、VLOOKUP、INDEX+MATCH、COUNTIFS、IFERROR、数据透视表及条件格式；具备大批量数据清洗、跨表匹配与异常分析经验。","Proficient with XLOOKUP, VLOOKUP, INDEX+MATCH, COUNTIFS, IFERROR, PivotTables and conditional formatting; experienced in large-scale data cleaning, cross-table matching and exception analysis."],
    ["Python 与机器学习","Python & Machine Learning","使用 Python、Pandas、NumPy、Scikit-learn 进行数据清洗、探索性分析、特征工程、回归建模及模型评估。","Use Python, Pandas, NumPy and Scikit-learn for data cleaning, exploratory analysis, feature engineering, regression modeling and model evaluation."],
    ["数据库与数据建模","Database & Data Modeling","使用 MySQL 进行数据库设计与业务数据建模，具备 ER 图绘制、多表关系梳理及业务数据结构设计经验。","Use MySQL for database design and business data modeling; experienced in ER diagrams, relational schema design and data-structure planning."],
    ["Java 与后端开发","Java & Back-end Development","具备 Java 项目实践经验，使用 Spring Boot、MyBatis 参与业务功能开发、数据库访问及前后端联调。","Project experience with Java, Spring Boot and MyBatis, including business features, database access and front-/back-end integration."],
    ["Web 前端开发","Web Front-end Development","使用 HTML、CSS、JavaScript 参与前端页面及交互功能开发。","Contributed to web pages and interactive features using HTML, CSS and JavaScript."],
    ["供应链与 ERP","Supply Chain & ERP","具备 ETA 跟踪、订单履约监控、延期风险识别、SOP 优化及跨团队协同经验；使用 SAP 查询采购订单、物料及供应商信息并核对账单。","Experienced in ETA tracking, order-fulfillment monitoring, delay-risk identification, SOP optimization and cross-team coordination; used SAP to retrieve purchasing, material and supplier information and verify invoices."]
  ]
};