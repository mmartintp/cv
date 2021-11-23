module.exports = {
  name: 'Miguel Martín Tapia',
  title: '',
  
  facts: {
    'Residence': 'Madrid -  Spain',
    LinkedIn: '<a href="https://www.linkedin.com/in/mmartintp/"><i class="fab fa-linkedin fact-icon"></i>mmartintp</a>',
    'Email': '<a href="mailto:mmartintp@gmail.com">mmartintp@gmail.com</a>',
     'Phone Number': '+34 654 803 661', 
     BirthDate: '1989-09-18',
  },
  skills: [
    ['SQL', '+++++'],
    ['Machine Learning', '++++'],
    ['Python', '+++++'],
    ['BigQuery', '++++'],
    ['GCP', '++++'],
    ['ETL', '++++'],
    ['DWH', '++++'],
    ['Java', '++++'],
    ['Terraform', '++'],
    ['C++', '++'],
    ['R', '++'],
    ['Docker', '++'],

  ],
  soft_skills : [
    ['Problem Solving', '+++++'],
    ['Teamwork', '++++'],
    ['Communication', '++++'],
    ['Adaptability', '++++'],
  ]
  ,
  languages: [
    ['Spanish', '+++++'],
    ['English', '++++']
  ],
  work_experience: [
    { 
      title: 'Data Scientist',
      company: 'Leroy Merlin',
      dates: '04.2019 - Present',
      badges: ['GCP', 'Python', 'SQL', 'BigQuery', 'CloudSQL', 'PubSub', 'ETL', 'Machine Learning', 'Tensorflow', 'BigQueryML', 'DataStudio', 'Git'],
      contents: `
- Collaborate on creating the in-house tool used to define the regular assortment composition using BigQuery, Python, GKE, PubSub and CloudSQL-PostgreSQL. Created several algorithms as part of the solution (for example, adjusted “web review scores” based on time and number of reviews). 
- Won one of the prizes in the annual Adeo internal hackathon with a solution to provide the best discount for products at the end of its life using BigQuery, Python and AutoML.
- Design and develop several ETL processes to move data from a semi-processed state inside the DWH (BigQuery) to a smaller, low latency database in order to be used by APIs and visualization tools. Pentaho Kettle, Python, SQL, GCS.
- Create a time-series forecasting model PoC for optimizing the monthly objectives with notebooks, Python, Tensorflow for LSTM and FB’s prophet.
- Create a solution with BigqueryML, for the prediction of the probability of a delivery service arriving later than expected enabling the salespeople to move the delivery date backwards at order-creation time.
- Coordinate the deployment of a Basket Analysis tool to help salespeople offer the best products to complete a purchase with BigQuery, SpringBoot and Vue.
- Create different DataStudios to help the business understand its data and take a data-driven decision. BigQuery -> DataStudio.     
`
    },
    {
      title: 'Business Intelligence Consultant',
      company: 'Capitole Consulting',
      dates: '10.2018 - 04.2019',
      badges: ['SQL', 'SAP BO', 'Teradata', 'Python', 'elasticsearch', 'Kibana'],
      contents: `
- Create a machine learning approach to help the business identify under and over-performing products in order to be proactive with the actions around them. Data extracted from Teradata DWH and processed with Python (pandas, scikit-learn)
- Upgrade a performance tracking tool in the client company by ingesting daily data from Teradata or SAP BO reports, feeding it into elasticsearch and visualizing it with a Custom Vue solution.
- Help the business analyze data available regarding Stocks, Prices, Sales, Purchases and others using SAP BO and data from the DWH (Teradata)

`
    },
    {
      title: 'Business Analytics Consultant',
      company: 'Indra/Minsait',
      dates: '01.2016 - 02.2017',
      badges: ['SQL', 'Python', 'ETL', 'SAP BO', 'Knime','Oracle', 'SQL Server', 'SSIS', 'SSRS', 'Microstrategy'],
      contents: `
- Help a Bus Operating company understand its data by designing and developing a reporting solution using Microstrategy and SQL Server.
- Provide an Airline Company with a complete BI solution in order to be able to analyze the high volume of data they were handling on a daily basis.  SQL Server, SSIS, SSRS.
- Collaborate in the creation of Machine Learning PoCs for several projects, for example, predicting the electricity usage of consumers in order to anticipate the capacity needed to buy the following days. Python, R, Knime.
`
    },
    {
      title: 'Jr. Business Analytics Consultant',
      company: 'Indra/Minsait',
      dates: '03.2014 - 01.2016',
      badges: ['SQL', 'ETL', 'SAP BO', 'SAP Data Services', 'Oracle', 'JasperETL', 'Talend OSDI'],
      contents: `
- Design a BI solution from scratch for a Railway Company. SAP BO, SQL, Oracle Database, JasperETL
- Maintain and improve a BI solution for another Railway Company. SAP BO, SQL, Oracle Database, SAP Data Services.
- Design and develop ETL solutions for several Toll Road Operators. SQL, Oracle Database, Talend Open Studio Data Integrator.
      
`
    }
  ],
  education: [
    {
      dates: '2008 - 2013',
      title: 'University Degree in Computer Science, Minor in Computing at Universidad Carlos III de Madrid.'
    }
  ],
  additional: [
    {
      header: '2017-2018 - Stock Market predictions',
      skills: ['Machine Learning', 'Python', 'ETL', 'MQL', 'C++'],
      contents: `
      Operated in the stock market with custom algorithms created as the result of learning new technologies and trying new frameworks.
      `
    },
    {
      header: '2015-2017 Football outcomes predictions',
      skills: ['Python', 'SQL', 'Scrapping'],
      contents: `
      Ingested several years of football outcomes and match events from various sources (CSV files, XML files, APIs and scrapped HTMLs) into a MariaDB database. Process the data with Java first, and then migrate to Python and create models to predict the results with moderate success. 
      `
    },
    {
      header: '2013 TV Show survivability',
      skills: ['Python', 'SQL', 'Scrapping'],
      contents: `
      Created a prediction service using data from several sources(IMDB, XML files) that predicted the probability of a show signing a second season depending on its first episodes’ results.
      `
    }
  ]
};
