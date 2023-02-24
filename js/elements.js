class EducationCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="col s12 m6 l4">
          <div class="card small course rounded hoverable-orange">
            <div class="card-content">
              <span class="card-title orange-text text-darken-2" style="font-size:1.5em"><a href="https://planetterp.com/course/CMSC320"
                  style="color:inherit;text-decoration:inherit;"><strong>Data Science</strong></a></span>
              <p>Broad overview of statistical data analysis, basic machine learning algorithms, large-scale data
                management, cloud computing, and data visualization.</p>
              <div class="card-action grey lighten-5 lower-rounded">
                <div class="col s3">
                  <img class="responsive-img tooltipped" data-position="bottom" data-tooltip="Python" src="icons/python.png"/>
                </div>
                <div class="col s3">
                  <img class="responsive-img tooltipped" data-position="bottom" data-tooltip="Docker" src="icons/docker.png"/>
                </div>
                <div class="col s3">
                  <img class="responsive-img tooltipped" data-position="bottom" data-tooltip="Jupyter" src="icons/jupyter.png"/>
                </div>
              </div>
            </div>
          </div>
        `
    }
}

customElements.define('education-card', EducationCard);