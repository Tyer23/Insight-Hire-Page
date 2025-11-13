const App = {
    // define the template for the component
    template:
       `
          <div class="container">
            <div class="row">
              <div class="col-sm-3">
                  <joblist />
              </div>
             
              <div class="col-md-9">
                  <router-view />
              </div>
            </div>
          </div>
       `
};
