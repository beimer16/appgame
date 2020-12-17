package com.apptest.core.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/app")
public class CoinController {
	
	
	
	@GetMapping(path={"/home","index"})
	public String index()
	{
		return "index";
	}

}
