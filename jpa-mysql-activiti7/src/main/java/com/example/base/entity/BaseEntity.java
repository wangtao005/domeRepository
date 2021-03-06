package com.example.base.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@MappedSuperclass
public class BaseEntity  implements Serializable { 

	/**
	 *序号
	 * wt
	 * 2019年5月9日
	 */
	private static final long serialVersionUID = -6053179739295246812L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Long id;
	
	@Temporal(TemporalType.DATE)
	@Column(name="create_date")
	private Date createDate;
	
	@Column(name="create_user_id")
	private Long createUserId;

	@Column(name="create_user_name")
	private String createUserName;
	
	@Temporal(TemporalType.DATE)
	@Column(name="updata_date")
	private Date updataDate;
	
	@Column(name="updata_user_id")
	private Long updataUserId;
	
	@Column(name="updata_user_name")
	private String updataUserName;
	  
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public Long getCreateUserId() {
		return createUserId;
	}

	public void setCreateUserId(Long createUserId) {
		this.createUserId = createUserId;
	}

	public String getCreateUserName() {
		return createUserName;
	}

	public void setCreateUserName(String createUserName) {
		this.createUserName = createUserName;
	}

	public Date getUpdataDate() {
		return updataDate;
	}

	public void setUpdataDate(Date updataDate) {
		this.updataDate = updataDate;
	}

	public Long getUpdataUserId() {
		return updataUserId;
	}

	public void setUpdataUserId(Long updataUserId) {
		this.updataUserId = updataUserId;
	}

	public String getUpdataUserName() {
		return updataUserName;
	}

	public void setUpdataUserName(String updataUserName) {
		this.updataUserName = updataUserName;
	}
	
}
