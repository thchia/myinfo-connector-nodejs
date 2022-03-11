declare module "@thchia/myinfo-connector-nodejs" {
  export interface MyInfoConnectorConfig {
    MYINFO_SIGNATURE_CERT_PUBLIC_CERT: string;
    READ_MYINFO_PUBLIC_CERT?: (path: string) => Promise<Buffer>;
    CLIENT_SECURE_CERT: string;
    CLIENT_SECURE_CERT_PASSPHRASE: string;
    READ_SECURE_CERT?: (path: string) => Promise<Buffer>;
    CLIENT_ID: string;
    CLIENT_SECRET: string;
    REDIRECT_URL: string;
    ATTRIBUTES: string;
    ENVIRONMENT: string;
    TOKEN_URL: string;
    PERSON_URL: string;
    USE_PROXY?: string;
    PROXY_TOKEN_URL?: string;
    PROXY_PERSON_URL?: string;
    DEBUG_LEVEL?: string;
    PEM_PATH?: string;
  }

  interface PersonBaseAttribute {
    classification: string;
    source: "1" | "2" | "3" | "4";
    lastupdated: string;
    unavailable?: true;
  }

  interface PersonValueAttribute extends PersonBaseAttribute {
    value: string | number | boolean;
  }

  interface PersonCodeAtribute extends PersonBaseAttribute {
    code: string;
    desc: string;
  }

  interface PersonAddressAttribute extends PersonBaseAttribute {
    type: string;
    block: { value: string };
    building: { value: string };
    floor: { value: string };
    unit: { value: string };
    street: { value: string };
    postal: { value: string };
    country: {
      code: string;
      desc: string;
    };
  }

  interface PersonPropertyOwnershipAttribute extends PersonBaseAttribute {
    noofowners: { value: number };
    address: Omit<PersonAddressAttribute, keyof PersonBaseAttribute>;
    hdbtype: { code: string; desc: string };
    leasecommencementdate: { value: string };
    termoflease: { value: number };
    dateofpurchase: { value: string };
    dateofownershiptransfer: { value: string };
    loangranted: { value: number };
    originalloanrepayment: { value: number };
    balanceloanrepayment: {
      years: { value: number };
      months: { value: number };
    };
    outstandingloanbalance: { value: number };
    monthlyloaninstalment: { value: number };
  }

  interface PersonContactNumberAttribute extends PersonBaseAttribute {
    prefix: { value: string };
    areacode: { value: string };
    nbr: { value: string };
  }

  interface PersonBirthRecordAttribute extends PersonBaseAttribute {
    birthcertno: { value: string };
    name: { value: string };
    hanyupinyinname: { value: string };
    aliasname: { value: string };
    hanyupinyinaliasname: { value: string };
    marriedname: { value: string };
    sex: { code: string; desc: string };
    race: { code: string; desc: string };
    secondaryrace: { code: string; desc: string };
    dialect: { code: string; desc: string };
    lifestatus: { code: string; desc: string };
    dob: { value: string };
    tob: { value: string };
  }

  interface PersonChildSponsorAttribute extends PersonBaseAttribute {
    nric: { value: string };
    name: { value: string };
    hanyupinyinname: { value: string };
    aliasname: { value: string };
    hanyupinyinaliasname: { value: string };
    marriedname: { value: string };
    sex: { code: string; desc: string };
    race: { code: string; desc: string };
    secondaryrace: { code: string; desc: string };
    dialect: { code: string; desc: string };
    dob: { value: string };
    birthcountry: { code: string; desc: string };
    lifestatus: { code: string; desc: string };
    residentialstatus: { code: string; desc: string };
    nationality: { code: string; desc: string };
    scprgrantdate: { value: string };
  }

  interface PersonHouseholdIncomeAttribute extends PersonBaseAttribute {
    high: { value: string };
    low: { value: string };
  }

  interface PersonVehicleAttribute extends PersonBaseAttribute {
    vehicleno: { value: string };
    type: { value: string };
    iulabelno: { value: string };
    make: { value: string };
    model: { value: string };
    chassisno: { value: string };
    engineno: { value: string };
    motorno: { value: string };
    yearofmanufacture: { value: string };
    firstregistrationdate: { value: string };
    originalregistrationdate: { value: string };
    coecategory: { value: string };
    coeexpirydate: { value: string };
    roadtaxexpirydate: { value: string };
    quotapremium: { value: number };
    openmarketvalue: { value: number };
    co2emission: { value: number };
    status: { code: string; desc: string };
    primarycolour: { value: string };
    secondarycolour: { value: string };
    attachment1: { value: string };
    attachment2: { value: string };
    attachment3: { value: string };
    scheme: { value: string };
    thcemission: { value: number };
    coemission: { value: number };
    noxemission: { value: number };
    pmemission: { value: number };
    enginecapacity: { value: number };
    powerrate: { value: number };
    effectiveownership: { value: string };
    propellant: { value: string };
    maximumunladenweight: { value: number };
    maximumladenweight: { value: number };
    minimumparfbenefit: { value: number };
    nooftransfers: { value: number };
    vpc: { value: string };
  }

  interface PersonDrivingLicenceAttribute extends PersonBaseAttribute {
    comstatus: { code: string; desc: string };
    totaldemeritpoints: { value: number };
    suspension: {
      startdate: { value: string };
      enddate: { value: string };
    };
    disqualification: {
      startdate: { value: string };
      enddate: { value: string };
    };
    revocation: {
      startdate: { value: string };
      enddate: { value: string };
    };
    pdl: {
      validity: { code: string; desc: string };
      expiryDate: { value: string };
      classes: { class: { value: string } }[];
    };
    qdl: {
      validity: { code: string; desc: string };
      expiryDate: { value: string };
      classes: { class: { value: string } }[];
    };
    photocardserialno: { value: string };
  }

  interface PersonAcademicQualificationAttribute extends PersonBaseAttribute {
    transcripts: {
      name: { value: string };
      yearattained: { value: string };
      results: {
        subject: { value: string };
        level: { value: string };
        grade: { value: string };
        subsubject: { value: string };
        subgrade: { value: string };
      }[];
      explanatorynotes: { value: string };
    }[];
    certificates: {
      name: { value: string };
      content: { value: string };
      opencertificate: {
        id: { value: number };
        primary: { value: boolean };
      };
      opencertificateindicator: { value: boolean };
    }[];
  }

  interface PersonNoaBasicAttribute extends PersonBaseAttribute {
    amount: { value: number };
    yearofassessment: { value: string };
  }

  interface PersonNoaAttribute extends PersonBaseAttribute {
    amount: { value: number };
    yearofassessment: { value: string };
    employment: { value: number };
    trade: { value: number };
    rent: { value: number };
    interest: { value: number };
    taxclearance: { value: string };
    category: { value: string };
  }

  interface PersonNoaHistoryBasicAttribute extends PersonBaseAttribute {
    noas: {
      amount: { value: number };
      yearofassessment: { value: string };
    }[];
  }

  interface PersonNoaHistoryAttribute extends PersonBaseAttribute {
    noas: {
      amount: { value: number };
      yearofassessment: { value: string };
      employment: { value: number };
      trade: { value: number };
      rent: { value: number };
      interest: { value: number };
      taxclearance: { value: string };
      category: { value: string };
    }[];
  }

  interface PersonCpfContributionAttribute extends PersonBaseAttribute {
    history: {
      date: { value: string };
      amount: { value: number };
      month: { value: string };
      employer: { value: string };
    }[];
  }

  interface PersonCpfEmployersAttribute extends PersonBaseAttribute {
    history: {
      month: { value: string };
      employer: { value: string };
    }[];
  }

  interface PersonCpfBalancesAttribute extends PersonBaseAttribute {
    ma: { value: number };
    oa: { value: number };
    sa: { value: number };
    ra: { value: number };
  }

  interface PersonCpfHousingWithdrawalsAttribute extends PersonBaseAttribute {
    withdrawaldetails: {
      address: Omit<PersonAddressAttribute, keyof PersonBaseAttribute>;
      accruedinterestamt: { value: number };
      monthlyinstalmentamt: { value: number };
      principalwithdrawalamt: { value: number };
      totalamountofcpfallowedforproperty: { value: number };
    }[];
  }

  export interface Person {
    partialuinfin: PersonValueAttribute;
    uinfin: PersonValueAttribute;
    name: PersonValueAttribute;
    hanyupinyinname: PersonValueAttribute;
    aliasname: PersonValueAttribute;
    hanyupinyinaliasname: PersonValueAttribute;
    marriedname: PersonValueAttribute;
    sex: PersonCodeAtribute;
    race: PersonCodeAtribute;
    secondaryrace: PersonCodeAtribute;
    dialect: PersonCodeAtribute;
    nationality: PersonCodeAtribute;
    dob: PersonCodeAtribute;
    birthcountry: PersonCodeAtribute;
    residentialstatus: PersonCodeAtribute;
    passportnumber: PersonValueAttribute;
    passportexpirydate: PersonValueAttribute;
    regadd: PersonAddressAttribute;
    mailadd: PersonAddressAttribute;
    billadd: PersonAddressAttribute;
    housingtype: PersonCodeAtribute;
    hdbtype: PersonCodeAtribute;
    hdbownership: PersonPropertyOwnershipAttribute[];
    ownerprivate: PersonValueAttribute;
    email: PersonValueAttribute;
    homeno: PersonContactNumberAttribute;
    mobileno: PersonContactNumberAttribute;
    marital: PersonCodeAtribute;
    marriagecertno: PersonValueAttribute;
    countryofmarriage: PersonCodeAtribute;
    marriagedate: PersonValueAttribute;
    divorcedate: PersonValueAttribute;
    childrenbirthrecords: PersonBirthRecordAttribute[];
    sponsoredchildrenrecords: PersonChildSponsorAttribute[];
    edulevel: PersonCodeAtribute;
    gradyear: PersonValueAttribute;
    schoolname: PersonCodeAtribute; // Example shows value too?
    occupation: PersonValueAttribute;
    employment: PersonValueAttribute;
    passtype: PersonCodeAtribute;
    passstatus: PersonValueAttribute;
    passexpirydate: PersonValueAttribute;
    employmentsector: PersonValueAttribute;
    householdincome: PersonHouseholdIncomeAttribute;
    vehicles: PersonVehicleAttribute[];
    drivinglicence: PersonDrivingLicenceAttribute;
    academicqualifications: PersonAcademicQualificationAttribute;
    "noa-basic": PersonNoaBasicAttribute;
    noa: PersonNoaAttribute;
    "noahistory-basic": PersonNoaHistoryBasicAttribute;
    noahistory: PersonNoaHistoryAttribute;
    cpfcontributions: PersonCpfContributionAttribute;
    cpfemployers: PersonCpfEmployersAttribute;
    cpfbalances: PersonCpfBalancesAttribute;
    cpfhousingwithdrawal: PersonCpfHousingWithdrawalsAttribute;
  }

  class MyInfoConnector {
    constructor(params: MyInfoConnectorConfig);

    getMyInfoPersonData(
      authCode: string,
      state: string,
      txnNo: string
    ): Promise<Partial<Person>>;
    getAccessToken(authCode: string, state: string): Promise<string>;
    getPersonData(accessToken: string, txnNo: string): Promise<Partial<Person>>;
  }

  export default MyInfoConnector;
}
