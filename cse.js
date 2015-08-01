google.load('search', '1', {language: 'en', style: google.loader.themes.V2_DEFAULT});
google.setOnLoadCallback(function() {
  var customSearchOptions = {};
  var orderByOptions = {};
  orderByOptions['keys'] = [{label: 'Relevance', key: ''} , {label: 'Date', key: 'date'}];
  customSearchOptions['enableOrderBy'] = true;
  customSearchOptions['orderByOptions'] = orderByOptions;
  customSearchOptions['overlayResults'] = true;
  var googleAnalyticsOptions = {};
  googleAnalyticsOptions['queryParameter'] = 'q';
  googleAnalyticsOptions['categoryParameter'] = '';
  customSearchOptions['googleAnalyticsOptions'] = googleAnalyticsOptions;
  var customSearchControl =   new google.search.CustomSearchControl('003297851775380654803:uxev1t2u_4e', customSearchOptions);
  customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
  var options = new google.search.DrawOptions();
  options.setAutoComplete(true);
  customSearchControl.draw('cse', options);
}, true);
