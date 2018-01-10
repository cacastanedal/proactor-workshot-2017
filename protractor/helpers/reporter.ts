import { DisplayProcessor, SpecReporter } from 'jasmine-spec-reporter';
import { AwesomeReport } from 'jasmine-awesome-report';

export let reporter = () => {
  jasmine.getEnv().addReporter(new SpecReporter({
    customProcessors: [DisplayProcessor],
  }));

  const config = {
    fullPath: 'reports',  
    fileName: 'report',
    merge: true
  };

  jasmine.getEnv().addReporter(AwesomeReport.getReport(config));
};

