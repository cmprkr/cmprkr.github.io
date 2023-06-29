var button_78 = document.getElementById('button_78');
var button_77 = document.getElementById('button_77');
var leftSlider = document.getElementById('left_slider');
var rightSlider = document.getElementById('right_slider');
var car_77 = document.getElementById('car_77');
var car_78 = document.getElementById('car_78');
var car_77_flip = document.getElementById('car_77_flip');
var car_78_flip = document.getElementById('car_78_flip');
var animationId_78, animationId_77;
var currentPosition_78 = 50;
var currentPosition_77 = 50;
var title = document.getElementById('title');
var letter_1 = document.querySelector('.word_choose.letter_1');
var spacer_id = document.querySelector('.word_pixel_spacer');
var dot_1 = document.getElementById('dot_1');
var dot_2 = document.getElementById('dot_2');
var dot_3 = document.getElementById('dot_3');
var border_circle = document.getElementById('border_circle');
var picture_container = document.getElementById('picture_container');
var callum_picture_box = document.querySelector('.callum_picture_box');
var agustin_picture_box = document.querySelector('.agustin_picture_box');

var no_focus = true;

button_78.addEventListener('mouseover', function() {
  	cancelAnimationFrame(animationId_78);
  	var start = currentPosition_78;
  	button_78.style.left = "-80" + '%';
  	button_78.style.height = "100" + "vh";
  	button_78.style.width = "180" + "%";
  	button_77.style.display = "none"
  	animateSlider78(start, 90, 850, easeInOutQuad);
  	no_focus = false;
  	clear_title();
  	animation_car_78()
});

button_78.addEventListener('mouseout', function() {
  	cancelAnimationFrame(animationId_78);
  	var start = currentPosition_78;
  	button_78.style.left = "0" + '%';
  	button_78.style.height = "25" + "%";
  	button_78.style.width = "60" + "%";
  	animateSlider78(start, 50, 650, easeInOutQuad);
  	setTimeout(function() {

		button_77.style.display = "block"

	}, 500);
	no_focus = true;
	clear_title();
	animation_choose_your_car()
});

button_77.addEventListener('mouseover', function() {
  	cancelAnimationFrame(animationId_77);
  	var start = currentPosition_77;
  	button_77.style.right = "-80" + '%';
  	button_77.style.height = "100" + "vh";
  	button_77.style.width = "180" + "%";
  	button_78.style.display = "none";
  	animateSlider77(start, 90, 850, easeInOutQuad);
  	no_focus = false;
  	clear_title();
  	animation_car_77()
});

button_77.addEventListener('mouseout', function() {
  	cancelAnimationFrame(animationId_77);
  	var start = currentPosition_77;
  	button_77.style.right = "0" + '%';
  	button_77.style.height = "25" + "%";
  	button_77.style.width = "60" + "%";
  	animateSlider77(start, 50, 650, easeInOutQuad);
  	setTimeout(function() {

		button_78.style.display = "block"
		
	}, 500);
	no_focus = true;
	clear_title();
	animation_choose_your_car();
});

function animateSlider78(start, end, duration, easing) {
  	var startTime = null;

  	function step(timestamp) {
	    if (!startTime) startTime = timestamp;
	    var progress = timestamp - startTime;
	    var percentage = Math.min(progress / duration, 1);
	    var easedPercentage = easing(percentage);

	    var value = start + (end - start) * easedPercentage;
	    leftSlider.style.right = value + '%';
	    currentPosition_78 = value;

	    if (percentage < 1) {
	      	animationId_78 = requestAnimationFrame(step);
	    }
  	}

  	animationId_78 = requestAnimationFrame(step);
}

function animateSlider77(start, end, duration, easing) {
  	var startTime = null;

  	function step(timestamp) {
	    if (!startTime) startTime = timestamp;
	    var progress = timestamp - startTime;
	    var percentage = Math.min(progress / duration, 1);
	    var easedPercentage = easing(percentage);

	    var value = start + (end - start) * easedPercentage;
	    rightSlider.style.left = value + '%';
	    currentPosition_77 = value;

	    if (percentage < 1) {
	      	animationId_77 = requestAnimationFrame(step);
	    }
  	}

  	animationId_77 = requestAnimationFrame(step);
}

function easeInOutQuad(t) {
	  t /= 0.5;
	  if (t < 1) return 0.5 * t * t;
	  t--;
	  return -0.5 * (t * (t - 2) - 1);
}

window.addEventListener('load', function() {

	var cHeight = letter_1.offsetHeight;
	var prevWidth = window.innerWidth;
	var prevHeight = window.innerHeight;

	var title_width = title.offsetWidth;
	var title_height = title.offsetHeight;
	var spacer_id_height = spacer_id.offsetHeight;

	var car_77_width = car_77.offsetWidth;
	var newHeight = car_77_width / 2.216494845;
	car_77.style.height = newHeight + 'px';
	car_78.style.height = newHeight + 'px';
	car_77_flip.style.height = newHeight + 'px';
	car_78_flip.style.height = newHeight + 'px';


	title.style.left = (prevWidth * .025) + "px";
	title.style.top = (prevWidth * .025) + "px";

	var containers = document.querySelectorAll(".word_pixel_container");
	var spacers = document.querySelectorAll(".word_pixel_spacer");

	containers.forEach(function(container) {
		var cHeight = letter_1.offsetHeight;
	  	var containerWidth = container.offsetWidth;
	  	var containerHeight = container.offsetHeight
	  	container.style.height = (containerWidth / 8) + "px";

	  	spacers.forEach(function(spacer) {
	  		spacer.style.height = (cHeight / 5) + "px";
	  	});
	});

	animation_choose_your_car()

	var border_circle_height = border_circle.offsetHeight;
	border_circle.style.width = border_circle_height + "px";
	border_circle.style.left = (border_circle_height / 2) * (-1) + "px";

	var picture_container_width = picture_container.offsetWidth;
	callum_picture_box.style.height = picture_container_width + "px";
	agustin_picture_box.style.height = picture_container_width + "px";

});

window.addEventListener('resize', function() {

	var cHeight = letter_1.offsetHeight;
	var prevWidth = window.innerWidth;
	var prevHeight = window.innerHeight;

	var title_width = title.offsetWidth;
	var title_height = title.offsetHeight;
	var spacer_id_height = spacer_id.offsetHeight;

	var car_77_width = car_77.offsetWidth;
	var newHeight = car_77_width / 2.216494845;
	car_77.style.height = newHeight + 'px';
	car_78.style.height = newHeight + 'px';
	car_77_flip.style.height = newHeight + 'px';
	car_78_flip.style.height = newHeight + 'px';

	title.style.left = (prevWidth * .025) + "px"
	title.style.top = (prevWidth * .025) + "px"

	var containers = document.querySelectorAll(".word_pixel_container");
	var spacers = document.querySelectorAll(".word_pixel_spacer");

	containers.forEach(function(container) {
		var cHeight = letter_1.offsetHeight;
	  	var containerWidth = container.offsetWidth;
	  	var containerHeight = container.offsetHeight
	  	container.style.height = (containerWidth / 8) + "px";

	  	spacers.forEach(function(spacer) {
	  		spacer.style.height = (cHeight / 5) + "px";
	  	});
	});

	var border_circle_height = border_circle.offsetHeight;
	border_circle.style.width = border_circle_height + "px";
	border_circle.style.left = (border_circle_height / 2) * (-1) + "px";

	var picture_container_width = picture_container.offsetWidth;
	callum_picture_box.style.height = picture_container_width + "px";
	agustin_picture_box.style.height = picture_container_width + "px";

});

var filled_pixel_color = '#000000';
var filled_pixel_secondary_color = '#03FF4F'
var filled_pixel_secondary_color_sub = '#ffffff'
var filled_pixel_tertiary_color= '#000000'
var filled_pixel_tertiary_color_sub= '#ffffff'

function animation_choose_your_car() {
	setTimeout(function() {
		if (no_focus === false) {
			return;
		}
		var chooseLetterC = document.querySelector('.word_choose.letter_1');
		var pixelColorElements = chooseLetterC.querySelectorAll('.pixel.color');
		pixelColorElements.forEach(function(element) {
		  	element.style.background = filled_pixel_color;
		});
		setTimeout(function() {
			if (no_focus === false) {
				return;
			}
			var chooseLetterH = document.querySelector('.word_choose.letter_2');
			var pixelColorElements = chooseLetterH.querySelectorAll('.pixel.color');
			pixelColorElements.forEach(function(element) {
			  	element.style.background = filled_pixel_color;
			});
			setTimeout(function() {
				if (no_focus === false) {
					return;
				}
				var chooseLetterO = document.querySelector('.word_choose.letter_3');
				var pixelColorElements = chooseLetterO.querySelectorAll('.pixel.color');
				pixelColorElements.forEach(function(element) {
				  	element.style.background = filled_pixel_color;
				});
				setTimeout(function() {
					if (no_focus === false) {
						return;
					}
					var chooseLetterO2 = document.querySelector('.word_choose.letter_4');
					var pixelColorElements = chooseLetterO2.querySelectorAll('.pixel.color');
					pixelColorElements.forEach(function(element) {
					  	element.style.background = filled_pixel_color;
					});
					setTimeout(function() {
						if (no_focus === false) {
							return;
						}
						var chooseLetterS = document.querySelector('.word_choose.letter_5');
						var pixelColorElements = chooseLetterS.querySelectorAll('.pixel.color');
						pixelColorElements.forEach(function(element) {
						  	element.style.background = filled_pixel_color;
						});
						setTimeout(function() {
							if (no_focus === false) {
								return;
							}
							var chooseLetterE = document.querySelector('.word_choose.letter_6');
							var pixelColorElements = chooseLetterE.querySelectorAll('.pixel.color');
							pixelColorElements.forEach(function(element) {
							  	element.style.background = filled_pixel_color;
							});
							setTimeout(function() {
								if (no_focus === false) {
									return;
								}
								var chooseLetterY = document.querySelector('.word_your.letter_1');
								var pixelColorElements = chooseLetterY.querySelectorAll('.pixel.color');
								pixelColorElements.forEach(function(element) {
								  	element.style.background = filled_pixel_color;
								});
								setTimeout(function() {
									if (no_focus === false) {
										return;
									}
									var chooseLetterO = document.querySelector('.word_your.letter_2');
									var pixelColorElements = chooseLetterO.querySelectorAll('.pixel.color');
									pixelColorElements.forEach(function(element) {
									  	element.style.background = filled_pixel_color;
									});
									setTimeout(function() {
										if (no_focus === false) {
											return;
										}
										var chooseLetterU = document.querySelector('.word_your.letter_3');
										var pixelColorElements = chooseLetterU.querySelectorAll('.pixel.color');
										pixelColorElements.forEach(function(element) {
										  	element.style.background = filled_pixel_color;
										});
										setTimeout(function() {
											if (no_focus === false) {
												return;
											}
											var chooseLetterR = document.querySelector('.word_your.letter_4');
											var pixelColorElements = chooseLetterR.querySelectorAll('.pixel.color');
											pixelColorElements.forEach(function(element) {
											  	element.style.background = filled_pixel_color;
											});
											setTimeout(function() {
												if (no_focus === false) {
													return;
												}
												var chooseLetterC = document.querySelector('.word_car.letter_1');
												var pixelColorElements = chooseLetterC.querySelectorAll('.pixel.color');
												pixelColorElements.forEach(function(element) {
												  	element.style.background = filled_pixel_color;
												});
												setTimeout(function() {
													if (no_focus === false) {
														return;
													}
													var chooseLetterA = document.querySelector('.word_car.letter_2');
													var pixelColorElements = chooseLetterA.querySelectorAll('.pixel.color');
													pixelColorElements.forEach(function(element) {
													  	element.style.background = filled_pixel_color;
													});
													setTimeout(function() {
														if (no_focus === false) {
															return;
														}
														var chooseLetterR = document.querySelector('.word_car.letter_3');
														var pixelColorElements = chooseLetterR.querySelectorAll('.pixel.color');
														pixelColorElements.forEach(function(element) {
														  	element.style.background = filled_pixel_color;
														});
														setTimeout(function() {
															if (no_focus === false) {
																return;
															}
															dot_1.style.background = filled_pixel_color
															setTimeout(function() {
																if (no_focus === false) {
																	return;
																}
																dot_2.style.background = filled_pixel_color
																setTimeout(function() {
																	if (no_focus === false) {
																		return;
																	}
																	dot_3.style.background = filled_pixel_color
																}, 70)
															}, 70)
														}, 70)
													}, 70)
												}, 70)
											}, 70)
										}, 70)
									}, 70)
								}, 70)
							}, 70)
						}, 70)
					}, 70)
				}, 70)
			}, 70)
		}, 70)
	}, 200)
};

function clear_title() {

	var all_pixels = document.querySelectorAll('.pixel');
	all_pixels.forEach(function(element) {
	  	element.style.background = "transparent";
	});

};

function animation_car_77() {
	setTimeout(function() {
		if (no_focus === true) {
			return;
		}
		var chooseLetterC = document.querySelector('.word_choose.letter_1');
		var pixelColorElements = chooseLetterC.querySelectorAll('.pixel.secondary_color');
		pixelColorElements.forEach(function(element) {
		  	element.style.background = filled_pixel_secondary_color_sub;
		});
		setTimeout(function() {
			if (no_focus === true) {
				return;
			}
			var chooseLetterH = document.querySelector('.word_choose.letter_2');
			var pixelColorElements = chooseLetterH.querySelectorAll('.pixel.secondary_color');
			pixelColorElements.forEach(function(element) {
			  	element.style.background = filled_pixel_secondary_color_sub;
			});
			setTimeout(function() {
				if (no_focus === true) {
					return;
				}
				var chooseLetterO = document.querySelector('.word_choose.letter_3');
				var pixelColorElements = chooseLetterO.querySelectorAll('.pixel.secondary_color');
				pixelColorElements.forEach(function(element) {
				  	element.style.background = filled_pixel_secondary_color_sub;
				});
				setTimeout(function() {
					if (no_focus === true) {
						return;
					}
					var chooseLetterO2 = document.querySelector('.word_your.letter_1');
					var pixelColorElements = chooseLetterO2.querySelectorAll('.pixel.secondary_color');
					pixelColorElements.forEach(function(element) {
					  	element.style.background = filled_pixel_secondary_color;
					});
					setTimeout(function() {
						if (no_focus === true) {
							return;
						}
						var chooseLetterS = document.querySelector('.word_your.letter_2');
						var pixelColorElements = chooseLetterS.querySelectorAll('.pixel.secondary_color');
						pixelColorElements.forEach(function(element) {
						  	element.style.background = filled_pixel_secondary_color;
						});
						setTimeout(function() {
							if (no_focus === true) {
								return;
							}
							var chooseLetterE = document.querySelector('.word_your.letter_3');
							var pixelColorElements = chooseLetterE.querySelectorAll('.pixel.secondary_color');
							pixelColorElements.forEach(function(element) {
							  	element.style.background = filled_pixel_secondary_color;
							});
							setTimeout(function() {
								if (no_focus === true) {
									return;
								}
								var chooseLetterY = document.querySelector('.word_your.letter_4');
								var pixelColorElements = chooseLetterY.querySelectorAll('.pixel.secondary_color');
								pixelColorElements.forEach(function(element) {
								  	element.style.background = filled_pixel_secondary_color;
								});
								setTimeout(function() {
									if (no_focus === true) {
										return;
									}
									var chooseLetterO = document.querySelector('.word_your.letter_5');
									var pixelColorElements = chooseLetterO.querySelectorAll('.pixel.secondary_color');
									pixelColorElements.forEach(function(element) {
									  	element.style.background = filled_pixel_secondary_color;
									});
									setTimeout(function() {
										if (no_focus === true) {
											return;
										}
										var chooseLetterU = document.querySelector('.word_your.letter_6');
										var pixelColorElements = chooseLetterU.querySelectorAll('.pixel.secondary_color');
										pixelColorElements.forEach(function(element) {
										  	element.style.background = filled_pixel_secondary_color;
										});
										setTimeout(function() {
											if (no_focus === true) {
												return;
											}
											var chooseLetterR = document.querySelector('.word_car.letter_1');
											var pixelColorElements = chooseLetterR.querySelectorAll('.pixel.secondary_color');
											pixelColorElements.forEach(function(element) {
											  	element.style.background = filled_pixel_secondary_color;
											});
											setTimeout(function() {
												if (no_focus === true) {
													return;
												}
												var chooseLetterC = document.querySelector('.word_car.letter_2');
												var pixelColorElements = chooseLetterC.querySelectorAll('.pixel.secondary_color');
												pixelColorElements.forEach(function(element) {
												  	element.style.background = filled_pixel_secondary_color;
												});
												setTimeout(function() {
													if (no_focus === true) {
														return;
													}
													var chooseLetterA = document.querySelector('.word_car.letter_3');
													var pixelColorElements = chooseLetterA.querySelectorAll('.pixel.secondary_color');
													pixelColorElements.forEach(function(element) {
													  	element.style.background = filled_pixel_secondary_color;
													});
													setTimeout(function() {
														if (no_focus === true) {
															return;
														}
														var chooseLetterR = document.querySelector('.word_car.letter_4');
														var pixelColorElements = chooseLetterR.querySelectorAll('.pixel.secondary_color');
														pixelColorElements.forEach(function(element) {
														  	element.style.background = filled_pixel_secondary_color;
														});
														setTimeout(function() {
															if (no_focus === true) {
																return;
															}
															var chooseLetterR = document.querySelector('.word_car.letter_5');
															var pixelColorElements = chooseLetterR.querySelectorAll('.pixel.secondary_color');
															pixelColorElements.forEach(function(element) {
															  	element.style.background = filled_pixel_secondary_color;
															});
														}, 70)
													}, 70)
												}, 70)
											}, 70)
										}, 70)
									}, 70)
								}, 70)
							}, 70)
						}, 70)
					}, 70)
				}, 70)
			}, 70)
		}, 70)
	}, 200)
};

function animation_car_78() {
	setTimeout(function() {
		if (no_focus === true) {
			return;
		}
		var chooseLetterC = document.querySelector('.word_choose.letter_1');
		var pixelColorElements = chooseLetterC.querySelectorAll('.pixel.tertiary_color');
		pixelColorElements.forEach(function(element) {
		  	element.style.background = filled_pixel_tertiary_color_sub;
		});
		setTimeout(function() {
			if (no_focus === true) {
				return;
			}
			var chooseLetterH = document.querySelector('.word_choose.letter_2');
			var pixelColorElements = chooseLetterH.querySelectorAll('.pixel.tertiary_color');
			pixelColorElements.forEach(function(element) {
			  	element.style.background = filled_pixel_tertiary_color_sub;
			});
			setTimeout(function() {
				if (no_focus === true) {
					return;
				}
				var chooseLetterO = document.querySelector('.word_choose.letter_3');
				var pixelColorElements = chooseLetterO.querySelectorAll('.pixel.tertiary_color');
				pixelColorElements.forEach(function(element) {
				  	element.style.background = filled_pixel_tertiary_color_sub;
				});
				setTimeout(function() {
					if (no_focus === true) {
						return;
					}
					var chooseLetterO2 = document.querySelector('.word_your.letter_1');
					var pixelColorElements = chooseLetterO2.querySelectorAll('.pixel.tertiary_color');
					pixelColorElements.forEach(function(element) {
					  	element.style.background = filled_pixel_tertiary_color;
					});
					setTimeout(function() {
						if (no_focus === true) {
							return;
						}
						var chooseLetterS = document.querySelector('.word_your.letter_2');
						var pixelColorElements = chooseLetterS.querySelectorAll('.pixel.tertiary_color');
						pixelColorElements.forEach(function(element) {
						  	element.style.background = filled_pixel_tertiary_color;
						});
						setTimeout(function() {
							if (no_focus === true) {
								return;
							}
							var chooseLetterE = document.querySelector('.word_your.letter_3');
							var pixelColorElements = chooseLetterE.querySelectorAll('.pixel.tertiary_color');
							pixelColorElements.forEach(function(element) {
							  	element.style.background = filled_pixel_tertiary_color;
							});
							setTimeout(function() {
								if (no_focus === true) {
									return;
								}
								var chooseLetterY = document.querySelector('.word_your.letter_4');
								var pixelColorElements = chooseLetterY.querySelectorAll('.pixel.tertiary_color');
								pixelColorElements.forEach(function(element) {
								  	element.style.background = filled_pixel_tertiary_color;
								});
								setTimeout(function() {
									if (no_focus === true) {
										return;
									}
									var chooseLetterO = document.querySelector('.word_your.letter_5');
									var pixelColorElements = chooseLetterO.querySelectorAll('.pixel.tertiary_color');
									pixelColorElements.forEach(function(element) {
									  	element.style.background = filled_pixel_tertiary_color;
									});
									setTimeout(function() {
										if (no_focus === true) {
											return;
										}
										var chooseLetterU = document.querySelector('.word_your.letter_6');
										var pixelColorElements = chooseLetterU.querySelectorAll('.pixel.tertiary_color');
										pixelColorElements.forEach(function(element) {
										  	element.style.background = filled_pixel_tertiary_color;
										});
										setTimeout(function() {
											if (no_focus === true) {
												return;
											}
											var chooseLetterR = document.querySelector('.word_your.letter_7');
											var pixelColorElements = chooseLetterR.querySelectorAll('.pixel.tertiary_color');
											pixelColorElements.forEach(function(element) {
											  	element.style.background = filled_pixel_tertiary_color;
											});
											setTimeout(function() {
												if (no_focus === true) {
													return;
												}
												var chooseLetterC = document.querySelector('.word_car.letter_1');
												var pixelColorElements = chooseLetterC.querySelectorAll('.pixel.tertiary_color');
												pixelColorElements.forEach(function(element) {
												  	element.style.background = filled_pixel_tertiary_color;
												});
												setTimeout(function() {
													if (no_focus === true) {
														return;
													}
													var chooseLetterA = document.querySelector('.word_car.letter_2');
													var pixelColorElements = chooseLetterA.querySelectorAll('.pixel.tertiary_color');
													pixelColorElements.forEach(function(element) {
													  	element.style.background = filled_pixel_tertiary_color;
													});
													setTimeout(function() {
														if (no_focus === true) {
															return;
														}
														var chooseLetterR = document.querySelector('.word_car.letter_3');
														var pixelColorElements = chooseLetterR.querySelectorAll('.pixel.tertiary_color');
														pixelColorElements.forEach(function(element) {
														  	element.style.background = filled_pixel_tertiary_color;
														});
														setTimeout(function() {
															if (no_focus === true) {
																return;
															}
															var chooseLetterR = document.querySelector('.word_car.letter_4');
															var pixelColorElements = chooseLetterR.querySelectorAll('.pixel.tertiary_color');
															pixelColorElements.forEach(function(element) {
															  	element.style.background = filled_pixel_tertiary_color;
															});
															setTimeout(function() {
																if (no_focus === true) {
																	return;
																}
																var chooseLetterR = document.querySelector('.word_car.letter_5');
																var pixelColorElements = chooseLetterR.querySelectorAll('.pixel.tertiary_color');
																pixelColorElements.forEach(function(element) {
																  	element.style.background = filled_pixel_tertiary_color;
																});
																setTimeout(function() {
																	if (no_focus === true) {
																		return;
																	}
																	var chooseLetterR = document.querySelector('.word_car.letter_6');
																	var pixelColorElements = chooseLetterR.querySelectorAll('.pixel.tertiary_color');
																	pixelColorElements.forEach(function(element) {
																	  	element.style.background = filled_pixel_tertiary_color;
																	});
																	setTimeout(function() {
																		if (no_focus === true) {
																			return;
																		}
																		var chooseLetterR = document.querySelector('.word_car.letter_7');
																		var pixelColorElements = chooseLetterR.querySelectorAll('.pixel.tertiary_color');
																		pixelColorElements.forEach(function(element) {
																		  	element.style.background = filled_pixel_tertiary_color;
																		});
																		setTimeout(function() {
																			if (no_focus === true) {
																				return;
																			}
																			var chooseLetterR = document.querySelector('.word_car.letter_8');
																			var pixelColorElements = chooseLetterR.querySelectorAll('.pixel.tertiary_color');
																			pixelColorElements.forEach(function(element) {
																			  	element.style.background = filled_pixel_tertiary_color;
																			});
																		}, 70)
																	}, 70)
																}, 70)
															}, 70)
														}, 70)
													}, 70)
												}, 70)
											}, 70)
										}, 70)
									}, 70)
								}, 70)
							}, 70)
						}, 70)
					}, 70)
				}, 70)
			}, 70)
		}, 70)
	}, 200)
};

function pixel_storm() {

	const fullpage_pixels = document.querySelectorAll('.fullpage_pixel');
    const shuffled_pixels = Array.from(fullpage_pixels);
    for (let i = shuffled_pixels.length - 1; i > 0; i--) {
    	const j = Math.floor(Math.random() * (i + 1));
    	[shuffled_pixels[i], shuffled_pixels[j]] = [shuffled_pixels[j], shuffled_pixels[i]];
  	}
  	let delay = 0.06;
  	shuffled_pixels.forEach((fullpage_pixel) => {
    	setTimeout(() => {
      		fullpage_pixel.style.background = 'transparent';
    	}, delay);
    	delay += 0.06;
  	});

  	setTimeout(function() {
    	fullpage_pixel_container.innerHTML = '';
    	fullpage_pixel_container.style.display = 'none';
  	}, 1000)

};