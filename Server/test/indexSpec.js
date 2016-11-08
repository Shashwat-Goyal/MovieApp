var should = require("chai").should(),
// expect = require("chai").expect,
// assert = require("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");

var url = supertest("http://localhost:8080");

describe("Testing the first route", function(err){
  it("should handle the request", function(done){
    url
        .get("/movie/GetMovies")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          console.log(res.text);
          var myObj = JSON.parse(res.text);
          console.log(myObj);
          myObj[0].imdbID.should.be.equal("tt1253863");
          should.not.exist(err);
          done();
          //expect(res.text).to.be.equal("Hello!");
          //assert(res.text == "Hello!","Test has failed");
        });
  });
});

describe("Testing the second route", function(err){
  it("should handle and send the computed info", function(done){
    url
        .post("/movie/AddMovie")
        .send({Title: "Dangal",Year: "2016",imdbID: "tt5074352",Type: "movie",Poster: "http://ia.media-imdb.com/images/M/MV5BNDQ3NDQwMTMtNTU2OS00ZmVhLWFhM2MtZjFjMjhhNzdkMWU5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"})
        .expect(200)
        .end(function(err,res){
          should.not.exist(err);
          var data=res.text;
          data.should.be.equal("Movie Added");
          done();
        });

  });
});

describe("Testing the third route", function(err){
  it("should update the movie with given id and details", function(done){
    url
        .put("/movie/UpdateMovie")
        .send({'imdbID':"tt5074352", "Rating":"4.7","Description":"This Aamir movie would be rocking"})
        .expect(200)
        .end(function(err,res){
          should.not.exist(err);
          var data = res.text;
          data.should.be.equal("Updated");
          done();
        });

  });
});
 describe("Testing the fourth route", function(err){
  it("should delete the movie with given id", function(done){
    url
        .delete("/movie/DeleteMovie")
        .send({'imdbID':"tt5074352"})
        .expect(200)
        .end(function(err,res){
          should.not.exist(err);
          var data=res.text;
          data.should.be.equal("Deleted the given movie");
          done();
        });

  });
});
